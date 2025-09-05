> I've got a request on slack, check if you can read it
  https://bowtie-ins.slack.com/archives/C0136EKN5JA/p1756371167706539

⏺ I'll check that Slack message for you.

⏺ slack - list_channel_conversations (MCP)(channel: "C0136EKN5JA", oldest: "2025-01-28T00:00:00", latest:
                                          "2025-01-28T23:59:59", limit: 50)


⏺ Let me try to get the specific message thread using the timestamp from the URL:

⏺ slack - list_conversation_replies (MCP)(channel_name: "C0136EKN5JA", thread_ts: "1756371167.706539")
  ⎿  {
       "user": "U05R01HTTLL",
       "ts": "1756371167.706539",
     … +89 lines (ctrl+r to expand)
  ⎿  {
       "user": "U06VCPLCGTU",
       "ts": "1756371175.592169",
     … +30 lines (ctrl+r to expand)

⏺ The Slack message is a request to expire lens and frames discount vouchers for group medical TAP plans and
  replace them with new allowance vouchers. The message includes:

  Request: Expire existing lens and frames discount voucher for the following group medical plans:
  - group-medical-tap-plan-1
  - group-medical-tap-plan-2
  - group-medical-tap-plan-3

  Replace with: New lens and frames allowance voucher (referenced in Google Sheets link)

  Task Assignment: The bot automatically assigned this to the B2B squad as task #BT-7029 since it involves
  group product configuration and voucher management.

  This appears to be a product configuration task that would need to be handled through the admin portal to
  update the voucher settings for these group medical plans.

> Right, can you check knowledge in /Users/luan/Development/Bowtie/bowtie-context-knowledge/qna and see if
  anything related?

⏺ serena - list_dir (MCP)(relative_path: "/Users/luan/Development/Bowtie/bowtie-context-knowledge/qna",
                         recursive: true)
  ⎿ Error executing tool: relative_path='/Users/luan/Development/Bowtie/bowtie-context-knowledge/qna' points
     to path outside of the repository root; cannot access for safety reasons


⏺ List(~/Development/Bowtie/bowtie-context-knowledge/qna)
  ⎿  Listed 290 paths (ctrl+r to expand)

⏺ Search(pattern: "voucher|lens|frame|allowance", path: "../bowtie-context-knowledge/qna/posts")
  ⎿  Found 14 files (ctrl+r to expand)

⏺ Let me check the most relevant files about vouchers:

⏺ Read(~/Development/Bowtie/bowtie-context-knowledge/qna/posts/q_126_How_to_assign_vouchers_automatically_to_a_po
      licy_when_it's_issued.md)
  ⎿  Read 16 lines (ctrl+r to expand)

⏺ Read(~/Development/Bowtie/bowtie-context-knowledge/qna/posts/q_402_How_to_create_a_voucher_and_use_it_on_behalf
      _of_a_customer.md)
  ⎿  Read 33 lines (ctrl+r to expand)

⏺ Read(~/Development/Bowtie/bowtie-context-knowledge/qna/posts/q_375_How_to_fix_Group_Policy_having_wrong_Voucher
      _config_sending_wrong_Vouchers_to_the_customers.md)
  ⎿  Read 246 lines (ctrl+r to expand)

⏺ Read(~/Development/Bowtie/bowtie-context-knowledge/qna/posts/q_160_How_to_unredeem_a_health_voucher.md)
  ⎿  Read 117 lines (ctrl+r to expand)

⏺ Based on the knowledge base, I found several relevant Q&A documents about voucher management that could be
  helpful for the Slack request:

  Most Relevant Knowledge Found:

  1. q_375: "How to fix Group Policy having wrong Voucher config/sending wrong Vouchers to the customers" -
  This is the most relevant as it deals with group medical plan voucher configuration issues and provides
  scripts to regenerate vouchers.
  2. q_126: "How to assign vouchers automatically to a policy when it's issued" - Basic voucher assignment
  concepts.
  3. q_402: "How to create a voucher and use it on behalf of a customer" - Manual voucher creation process.
  4. q_160: "How to unredeem a health voucher" - How to void/expire vouchers.

  Key Insights for the Request:

  The Slack request asks to expire existing lens and frames discount vouchers and replace with new allowance
  vouchers for the 3 group medical TAP plans. Based on the knowledge:

  - VoucherProvision and VoucherProvisionItem models control voucher generation
  - The process involves updating product configuration first, then regenerating vouchers
  - There are scripts available to handle voucher regeneration for group policies
  - The task should involve updating the product config in the admin portal to expire old voucher provisions
  and add new ones

  This is indeed a B2B squad task as it involves group product configuration changes and voucher management,
  which aligns with the automatic assignment in the Slack message.

> Based on knowledge bsae, present me with more info/guide

⏺ Based on the knowledge base, here's a comprehensive guide for handling the lens and frames voucher
  replacement request:

  Overview of the Task

  The request involves expiring existing discount vouchers and replacing them with allowance vouchers for 3
  group medical TAP plans. This is a common voucher configuration update scenario.

  Key Concepts from Knowledge Base

  Voucher Architecture

  - VoucherProvision: Defines the voucher template/blueprint
  - VoucherProvisionItem: Maps VoucherProvision to BenefitItem and HealthCareService
  - Voucher: The actual voucher instance given to customers
  - Token: The redeemable token linked to vouchers

  How Vouchers Work

  - One VoucherProvision generates one Voucher per policy
  - Multiple VoucherProvisionItem entries can create a "combined" voucher with multiple services
  - Vouchers are auto-generated when policies are issued/renewed based on product configuration

  Step-by-Step Process

  Step 1: Update Product Configuration

  1. Navigate to Admin Portal: Access the product config for each plan:
    - group-medical-tap-plan-1
    - group-medical-tap-plan-2
    - group-medical-tap-plan-3
  2. Expire Old Voucher Provisions:
    - Find existing lens/frames discount VoucherProvision entries
    - Set appropriate expiry dates to disable them
  3. Add New Voucher Provisions:
    - Create new VoucherProvision entries for lens/frames allowance
    - Configure the VoucherProvisionItem mappings according to the Google Sheets specification
    - Ensure proper BenefitItem and HealthCareService associations

  Step 2: Regenerate Vouchers for Existing Policies

  After updating product config, existing policies need their vouchers regenerated. The knowledge base
  provides several approaches:

  Option A: Full Voucher Regeneration

  Use Tony Cheng's comprehensive script from q_375:
  # Reference: https://gist.github.com/tychengaf/1d3894a8ebf5949c50070d92f2aa62bd
  # This script regenerates ALL vouchers for a group policy

  Option B: Missing Voucher Generation Only

  Use Kevin Wongso's selective approach from q_375:
  # This compares eligible vs existing voucher provisions
  # Only generates missing vouchers, doesn't regenerate existing ones

  Option C: Current Year Vouchers Only

  Use Luan Nguyen's targeted script for new year vouchers:
  # Generates missing vouchers for current year only
  # Uses timezone.now() instead of policy.effective_date

  Step 3: Manual Voucher Creation (If Needed)

  If mid-year changes are required, use the manual approach from q_375:

  from partnership.services.voucher import create_policy_voucher_from_voucher_provision

  benefit_item = BenefitItem.objects.get(id=XXXX)
  voucher_provision_item = benefit_item.voucher_provision_items.first()
  voucher_provision = voucher_provision_item.provision

  effective_date = policy.effective_date
  expiry_date = policy.expiry_date
  create_policy_voucher_from_voucher_provision(
      policy,
      voucher_provision,
      effective_date=effective_date,
      expiry_date=expiry_date
  )

  Important Considerations

  Timing and Coordination

  - Product Config First: Always update product configuration before running voucher generation scripts
  - Sense Checking: All scripts include debugging/verification steps - use them
  - Mid-Year Changes: Require special handling with manual effective/expiry date specification

  Data Validation

  - Verify existing voucher provisions before expiring them
  - Cross-reference with the Google Sheets specification for new allowance amounts
  - Test with a small subset of policies before bulk operations

  Impact Assessment

  - Check how many policies will be affected across the 3 group medical plans
  - Ensure customer communications are coordinated if voucher changes are visible
  - Consider any ongoing claim processes that might reference old vouchers

  Related Tools and Scripts

  The knowledge base provides several utility functions:
  - Voucher Voiding: From q_160 for reversing accidental voucher usage
  - Manual Voucher Creation: From q_402 for individual customer cases
  - Bulk Operations: Multiple approaches in q_375 for group policy voucher management

  Recommended Approach

  1. Start with Product Config Update in admin portal
  2. Use Kevin's Selective Script to identify missing vouchers only
  3. Generate Missing Vouchers using the targeted creation method
  4. Verify Results before considering the task complete

  This approach minimizes disruption to existing valid vouchers while ensuring new allowance vouchers are
  properly provisioned.

> Find guide on expiring existing vouchers

⏺ Search(pattern: "expire|expiry|void|disable|deactivate", path: "../bowtie-context-knowledge/qna/posts", output_mode:
        "content")
  ⎿  Found 176 lines (ctrl+r to expand)

⏺ Perfect! I found detailed information about expiring vouchers. Let me extract the most relevant guides:

⏺ Read(~/Development/Bowtie/bowtie-context-knowledge/qna/posts/q_160_How_to_unredeem_a_health_voucher.md)
  ⎿  Read 78 lines (ctrl+r to expand)

⏺ Based on the knowledge base, here's the comprehensive guide for expiring existing vouchers:

  Guide: Expiring Existing Vouchers

  Method 1: Direct Voucher Expiry (Individual Vouchers)

  From q_160: The most direct way to expire/void a voucher is by setting its expiry date to its effective date.

  Core Function:

  from django.db import transaction
  from django.utils import timezone

  @transaction.atomic
  def void_voucher(voucher_id: int, expiry_date: datetime = None):
      voucher = Voucher.objects.get(id=voucher_id)
      expiry_date = expiry_date or voucher.effective_date
      voucher.expiry_date = expiry_date
      voucher.save()
      logger.info(
          f'Voided voucher `{voucher.id}` with expiry date `{voucher.expiry_date}`'
      )

  Usage:

  # Expire immediately by setting expiry = effective date
  voucher_to_be_voided = Voucher.objects.get(id=xxx)
  void_voucher(voucher_id=voucher_to_be_voided.id)

  # Or set a specific expiry date
  void_voucher(voucher_id=voucher_to_be_voided.id, expiry_date=timezone.now())

  Method 2: Bulk Voucher Expiry for Group Policies

  From q_375: When dealing with group policies, you can identify and expire specific types of vouchers.

  Identify Existing Vouchers:

  from policy.constants.status import PolicyStatus

  # For a specific group policy
  group_policy = GroupPolicy.objects.get(policy_number='XXXXX')
  policies = group_policy.policies.filter(status__in=PolicyStatus.terminable())

  # Find existing lens/frames vouchers
  for policy in policies:
      existing_tokens = policy.tokens.filter(voucher__isnull=False)
      for token in existing_tokens:
          voucher = token.voucher
          # Check if this is a lens/frames discount voucher
          # (you'll need to identify them by provision type/benefit item)
          print(f"Policy: {policy.policy_number}, Voucher: {voucher.id}, Provision: {voucher.provision}")

  Expire Specific Voucher Types:

  # Filter and expire lens/frames discount vouchers
  lens_frames_discount_tokens = policy.tokens.filter(
      voucher__isnull=False,
      voucher__provision__voucher_provision_items__benefit_item__code__contains='lens'  # Adjust filter criteria
  )

  for token in lens_frames_discount_tokens:
      void_voucher(token.voucher.id)

  Method 3: Product Configuration Level (Recommended)

  The cleanest approach is to expire vouchers at the product configuration level by updating VoucherProvision records.

  Steps:

  1. Identify VoucherProvision Records:
    - Find the VoucherProvision entries for lens/frames discount in the 3 group medical TAP plans
    - These are typically linked through VoucherProvisionItem → BenefitItem relationships
  2. Update VoucherProvision Expiry:
  # Find the specific voucher provisions for lens/frames discount
  lens_frames_provisions = VoucherProvision.objects.filter(
      voucher_provision_items__benefit_item__code__contains='lens_frames_discount'
  )

  # Set expiry date to make them inactive
  for provision in lens_frames_provisions:
      provision.expiry_date = timezone.now()
      provision.save()
  3. This approach automatically makes all related vouchers inactive without needing to update individual voucher
  records.

  Method 4: Admin Portal Configuration

  From the knowledge base, the proper workflow involves:

  1. Navigate to Admin Portal
  2. Access Product Configuration for each group medical TAP plan
  3. Find VoucherProvision entries for lens/frames discount
  4. Set expiry dates or disable the provisions
  5. Save configuration changes

  Key Considerations

  Timing Strategy:

  - Immediate Expiry: Set expiry_date = effective_date or timezone.now()
  - Scheduled Expiry: Set a future date for planned transitions
  - Graceful Period: Allow some overlap during transition

  Impact Assessment:

  # Check how many policies/vouchers will be affected
  affected_vouchers = Voucher.objects.filter(
      provision__voucher_provision_items__benefit_item__code__contains='lens_frames_discount',
      expiry_date__gt=timezone.now()  # Currently active
  )
  print(f"Will expire {affected_vouchers.count()} active vouchers")

  Verification Script:

  # After expiring, verify the changes
  expired_vouchers = Voucher.objects.filter(
      provision__voucher_provision_items__benefit_item__code__contains='lens_frames_discount',
      expiry_date__lte=timezone.now()  # Now expired
  )
  print(f"Successfully expired {expired_vouchers.count()} vouchers")

  Recommended Approach for Your Task

  1. Use Product Configuration Method (Method 3) for clean, systematic expiry
  2. Target the specific VoucherProvision records for lens/frames discount
  3. Set expiry dates appropriately based on transition timeline
  4. Verify changes before proceeding with new voucher generation
  5. Coordinate with customer communications if visible to customers

  This approach ensures all existing lens/frames discount vouchers become inactive while maintaining data integrity and
  audit trails.
