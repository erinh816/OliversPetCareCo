/**
 * Format given date following either defaultIptions or given options
 * config could be:
 * const config = {
  weekday: 'long', // Exclude the weekday
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};
 */
export const dateFormat = (date, config) => {
  const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
  const options = config ? config : defaultOptions;

  return new Date(date).toLocaleDateString("en-US", options);
};


//long means the long form of months
//ex: January instead of Jan
