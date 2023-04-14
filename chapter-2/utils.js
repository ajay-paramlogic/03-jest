const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const truncate = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;

const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);

const average = (arr) => (arr.length === 0 ? 0 : sum(arr) / arr.length);

const unique = (arr) => Array.from(new Set(arr));

module.exports = {
  capitalize,
  truncate,
  sum,
  average,
  unique,
};
