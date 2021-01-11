const { format, subDays } = require('date-fns')

function toStringFormat(date = new Date()) {
  return format(date, "yyyy-MM-dd'T'HH:mm:ssz");
}

function subDaysFrom(days, date = new Date()) {
  return subDays(date, days);
}

module.exports = {
  toStringFormat,
  subDaysFrom
};
