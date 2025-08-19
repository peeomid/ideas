import pandas as pd
import os
from datetime import datetime

def compare_excel_files(file_a_path, file_b_path):
    """
    Compare quantities between two Excel files based on item codes.
    file_a_path: Path to the first Excel file (single sheet)
    file_b_path: Path to the second Excel file (multiple sheets)
    """
    # Read the reference file (A1)
    df_a = pd.read_excel(file_a_path)
    
    # Get all sheet names from file B1
    excel_b = pd.ExcelFile(file_b_path)
    sheet_names = excel_b.sheet_names
    
    # Create a directory for output if it doesn't exist
    output_dir = 'comparison_results'
    os.makedirs(output_dir, exist_ok=True)
    
    # Current timestamp for the output file
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    
    # Create an Excel writer for the output
    output_file = f'{output_dir}/comparison_results_{timestamp}.xlsx'
    with pd.ExcelWriter(output_file) as writer:
        # Process each sheet in file B1
        for sheet in sheet_names:
            # Read the sheet
            df_b = pd.read_excel(file_b_path, sheet_name=sheet)
            
            # Merge the dataframes based on item code
            merged_df = pd.merge(
                df_b,
                df_a,
                on='item_code',  # Replace with your actual column name
                how='left',
                suffixes=('_B', '_A')
            )
            
            # Calculate differences
            merged_df['difference'] = merged_df['quantity_B'] - merged_df['quantity_A']  # Replace with your actual column names
            
            # Filter only rows with differences
            differences_df = merged_df[merged_df['difference'] != 0]
            
            # Save to the output Excel file
            differences_df.to_excel(writer, sheet_name=sheet, index=False)
    
    return output_file

if __name__ == "__main__":
    # You'll need to replace these paths with your actual file paths
    file_a = "path_to_file_A1.xlsx"
    file_b = "path_to_file_B1.xlsx"
    
    try:
        output_file = compare_excel_files(file_a, file_b)
        print(f"Comparison completed! Results saved to: {output_file}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
