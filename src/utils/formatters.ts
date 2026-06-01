/**
 * Utility functions for formatting strings, numbers, and UI data across the application.
 */

/**
 * Utility to convert common fraction strings into their Unicode equivalents
 * for professional cross-device table typography.
 * 
 * Specifically handles:
 * '1/4' -> '¼'
 * '1/2' -> '½'
 * '3/4' -> '¾'
 * 
 * @param value The raw string or number to format
 * @returns The cleanly formatted string with Unicode fractions
 */
export function formatFraction(value: string | number | null | undefined): string {
  if (value == null) return String(value || '');
  const strValue = String(value);
  
  // Replace standard fractions with Unicode
  let formatted = strValue.replace(/1\/4/g, '¼');
  formatted = formatted.replace(/1\/2/g, '½');
  formatted = formatted.replace(/3\/4/g, '¾');
  
  return formatted;
}
