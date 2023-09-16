/**
 * Get the fraction between a start date and an end date. The dates must have the same format.
 * @param startDate - Date object with format
 * @param endDate - Date Object with format
 * @returns {number} - The fraction of the startDate / endDate
 */

export const getDateFraction = (
  startDate: Date | string,
  endDate: Date | string
) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const today = new Date().getTime();

  var q = Math.abs(today - start);
  var d = Math.abs(end - start);
  return +Math.round((q / d) * 100);
};
