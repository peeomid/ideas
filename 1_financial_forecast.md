# Flowcast — Personal Financial Forecast & What-If Analysis (Vietnam 🇻🇳 & USA 🇺🇸)

## 1. Purpose
Flowcast is an interactive personal-finance projection engine that lets users model cash-flow, balance-sheet, and net-worth trajectories across multiple scenarios. Its mission is to turn complex financial decisions into clear, data-driven insights for consumers in Vietnam and the United States.

Example questions the tool should answer:
* “If I buy a condo in Ho Chi Minh City with a 20-year mortgage, how will my net worth compare to renting and investing the difference?”
* “If US inflation averages 6% instead of 3%, when can I retire?”

---

## 2. Core Functionalities
### 2.1 Financial Entity Catalogue
Allow users to create, edit and track the following entity types. Each entity has market-specific parameters **and supports value schedules** (fixed, step-change, or growth rate) so that properties such as interest rates or salary can vary over time.

| Category | Vietnam Specifics | USA Specifics |
| --- | --- | --- |
| **Income** | • Monthly salary (gross & net after PIT)  
• Business/side-hustle income  
• Dividends (V-N stock market) | • Salary/bonus (federal & state tax)  
• 1099 self-employment  
• Social-security benefits  
• Dividends, interest |
| **Expenses** | • Living costs, VAT-inclusive  
• Compulsory social insurance contributions  | • Living costs with sales-tax  
• Medicare, Social Security withholding |
| **Savings** | • Term deposits (VND) with tiered interest  | • Savings / CDs (USD) with APY |
| **Investments** | • HOSE/HNX stocks, ETFs, open-ended funds  
• Government bonds, Vàng SJC (gold)  
• Real estate (condotel, land) | • NYSE/Nasdaq stocks, ETFs, mutual funds  
• 401(k), IRA with employer match  
• US Treasury, REITs |
| **Debt** | • Home mortgage with floating rate (VNIBOR + x%)  
• Auto loan with teaser APR  
• Education loan | • 30-year fixed / 5-1 ARM mortgage  
• Auto loan  
• Student loan (federal/private) |
| **Storage / Wallets** | • Multi-currency bank account (VND, USD)  | • Checking / savings, cash |

#### 2.1.1 Attribute Schema (per entity)
Each entity record stores a **current value** plus an optional **schedule array** of future changes. Schedules are timestamped and may be absolute numbers or percentage rates.

| Field | Description | Examples |
| --- | --- | --- |
| `startDate` | YYYY-MM-DD the entity becomes active | `2025-01-01` |
| `endDate` | Optional closing date | `2045-12-31` |
| `valueType` | `amount`, `rate`, or `growth` | `amount` for salary, `rate` for interest |
| `initialValue` | Base amount or rate at `startDate` | `20 000 000 ₫` salary, `7 %` loan rate |
| `schedule` | Array of `{date, value}` overrides | `[ {"date":"2026-01-01","value":0.05} ]` |
| `indexation` | Optional CPI/Fx index flag | `true` means value grows with chosen CPI |

Examples:
* **Car Loan (VN):** `initialValue: 0.07`, `schedule: [{date:"2026-01-01", value:0.1}]`.
* **Salary (US):** `initialValue: 80 000 USD`, `growth: 3 % p.a.` via `indexation` rule.

The engine interpolates yearly/monthly values based on the schedule.

#### 2.1.2 Input Fields by Entity Type
Below are the **minimum inputs** required for each entity category. Market-specific defaults (e.g., tax rates) are applied, but all can be overridden.

| Entity | Key Inputs | Notes |
| --- | --- | --- |
| **Income** | `title`, `startDate`, `endDate?`, `frequency` (monthly/quarterly/annual), `grossAmount`, `currency`, `taxWithholding?`, `schedule[]`, `indexation?` | Tax withholding defaults to VN PIT table or US federal+state; user can override. |
| **Expense** | `title`, `startDate`, `endDate?`, `frequency`, `amount`, `currency`, `category` (housing, food, etc.), `schedule[]`, `inflationIndex?` | Inflation index toggles CPI linking. |
| **Savings (Deposit/CD)** | `bankName`, `startDate`, `maturityDate`, `principal`, `currency`, `interestRate`, `compounding` (monthly/quarterly), `schedule[]` | Tiered or step interest via schedule. |
| **Investment (Equity/Fund/Bond/Gold/Real-estate)** | `assetName`, `type` (stock, ETF, gold, property), `purchaseDate`, `units`, `purchasePrice`, `currency`, `expectedReturn%`, `dividendYield%?`, `riskLevel`, `schedule[]` | For real-estate add `rentalIncome`, `maintenanceCost%`. |
| **Debt (Loan/Mortgage)** | `lender`, `principal`, `currency`, `startDate`, `termMonths`, `interestRate`, `repaymentType` (annuity/equal principal), `schedule[]` (rate steps), `balloonPayment?`, `gracePeriod?` | Supports teaser rates like 7 %→10 %. |
| **Storage / Wallet** | `accountName`, `currency`, `currentBalance`, `interestRate?`, `schedule[]`, `linkedBank` | Multi-currency balances captured as separate records. |

*All entities inherit common fields defined in 2.1.1 (valueType, schedule, etc.).*

#### 2.1.3 Sub-Entities & Linked Records
Certain parent entities can **own** child records that inherit timelines from the parent but maintain their own schedules/values.

| Parent Type | Allowed Child Entities | Purpose |
| --- | --- | --- |
| Investment → `realEstate` | • Debt (mortgage/loan)  
• Income (rental)  
• Expense (maintenance, HOA) | Model property with financing and cash-flow streams attached to one asset. |
| Investment → `business` | • Income (dividend/distribution)  
• Expense (operating)  
• Debt (business loan) | Small-biz investments. |

**Linking Fields** (stored on child): `parentId`, `allocation%?` (for rental income share), `syncTimeline?`.

Example: *Buy flat worth 3 b VND, 70 % LTV mortgage. Child loan entity created under the property. Rental income child created with monthly rent schedule.*

#### 2.1.4 Money-Flow Allocation Rules
For **Income** (and optionally **Wallet** balances) users define ordered allocation rules executed each period.

Rule object: `{order, targetId|category, amountType, amountValue}`

| Field | Options | Example |
| --- | --- | --- |
| `order` | Integer priority | 1 |
| `targetId` | Entity UUID to receive funds | loan-uuid |
| `category` | Built-in keywords: `savings`, `expense`, `investment`, `wallet` | savings |
| `amountType` | `percent` or `fixed` | percent |
| `amountValue` | If percent 0-100, else currency | 10 |

Algorithm per period:
1. Start with income gross.
2. Apply tax/withholding -> net income.
3. Iterate rules by `order`. Deduct `amount` to target until exhausted.
4. Any remainder follows **default sink** (`wallet`).

Example salary 10 $:  
`[ {order:1, category:"savings", amountType:"percent", amountValue:10}, {order:2, targetId:"loan123", amountType:"fixed", amountValue:3} ]` → $1 to savings, $3 to loan payment, $6 left for expenses/default.

UI Suggestion: drag-and-drop rule list with validation (sum ≤100 % for percent-based rules).

### 2.2 Data Inputs & Assumptions
1. **Currency & FX** – Support VND and USD; **users manually enter FX rates** (e.g., monthly average). Auto-fetching APIs will be added in later phases.
2. **Tax Rules** –
   * Vietnam: progressive PIT slabs (Circular 79/2023), capital-gain tax 0.1%/trade, 5% interest tax.
   * USA: federal & state income brackets, FICA, long-term capital-gains.
3. **Inflation & CPI** – User-definable CPI paths (VN-GSO, US-BLS) with historical presets.
4. **Interest Curves** – Default central-bank policy rates (SBV refinancing rate, US Fed Funds) + configurable spreads.
5. **Market Returns** – Historical average returns (VN30, S&P 500) with sigma, enabling Monte-Carlo.

### 2.3 Scenario & What-If Engine
* Deterministic projections (baseline) and stochastic simulations (≥1 000 runs) for risk bands (5th/50th/95th percentile).
* Branching scenarios (e.g. *Buy House→Have Child→Career Break* vs *Rent→No Child*).
* Sensitivity toggles: inflation ±n %, salary growth, investment return, VND↔USD fx shock.

### 2.4 Visualisation & Reporting
* Year-by-year cash-flow table, stacked bar by category.
* Net-worth curve with confidence interval shading.
* Debt amortisation schedule (differentiated vs equal-principal for VN; fixed vs ARM for US).
* Tax breakdown chart.
* Downloadable PDF & Excel export.

### 2.5 Integrations (Optional v2)
* Open Banking (TPBank, Plaid) for real account sync.
* Stock price feed (SSI for VN, Alpha Vantage/IEX Cloud for US).
* Real-estate price API (Batdongsan, Zillow).

### 2.6 MVP User Flows & Use Cases
Below are streamlined flows the MVP must support. They should be intuitive and require minimal data entry.

#### UC-1: Initial Setup & Baseline Forecast
1. Select market (`VN` or `US`) and base currency (`₫` or `$`).
2. Enter starting wallet balances.
3. Add recurring income (salary) and essential expenses via quick-add wizard.
4. Define savings rate or basic allocation rules (optional).
5. Run forecast → view 10-year cash-flow and net-worth charts.

#### UC-2: Add New Entity Mid-Timeline
*Example*: user plans to buy a car in 2 years.
1. Navigate to "Entities" → "Add Debt → Auto Loan".
2. Input purchase date `2027-06`, principal, teaser/step rates.
3. Forecast auto-updates charts and debt schedules.

#### UC-3: What-If Scenario Comparison
1. Duplicate current baseline as *Scenario A*.
2. Create *Scenario B* by editing: increase salary growth to 8 % p.a.
3. Run projection for both scenarios.
4. Compare side-by-side: net-worth delta, debt payoff date, cash reserve.

#### UC-4: Real-Estate Purchase w/ Rental & Mortgage
1. Add Investment → Real-Estate with price and purchase date.
2. Wizard prompts to attach child Mortgage loan → user enters loan terms.
3. Wizard prompts to add Rental income → user enters rent schedule.
4. Forecast shows property value appreciation, mortgage amortisation, rental cash-flow.

#### UC-5: Income Allocation Rules
*Example*: salary 30 M ₫ → 10 % savings, fixed 5 M ₫ loan payment, remainder expenses.
1. Go to Income → Salary → "Allocation Rules".
2. Create ordered rules as specified.
3. Forecast demonstrates monthly transfers and remaining disposable income.

#### Additional Simple What-If Ideas (still MVP)
* Early loan payoff vs scheduled payoff.
* Shift 50 % of term-deposit to ETF after year 3.
* FX shock: VND depreciates 5 % in year 5.
* Salary cut 20 % for one-year sabbatical.

These flows keep complexity low while showcasing the engine’s core power: entity management, scheduling, allocation, and scenario comparison.

---

## 3. Non-Functional Requirements
1. **Localization** – UI in English & Vietnamese; units auto-switch (₫ vs $).  
2. **Performance** – 10-year projection < 1 s; 40-year Monte-Carlo < 5 s.
3. **Security & Privacy** – AES-256 data at rest, OAuth2 for integrations, GDPR & Vietnam Decree 13 compliance.
4. **Extensibility** – Plug-in model to add countries or asset classes later.

---

## 4. Out-of-Scope (MVP)
* Corporate finance forecasting
* Crypto trading
* Tax filing submission

---

## 5. Roadmap
1. MVP: deterministic engine, manual inputs, basic charts.
2. +Tax modules, localization, FX.
3. +Monte-Carlo & scenario manager.
4. +Data integrations & mobile app.

---

*Last updated: 2025-07-19*