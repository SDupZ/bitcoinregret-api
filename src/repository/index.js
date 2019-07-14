const { fetchCurrentPrice, fetchPriceOnDate } = require('./coindesk');
// const { fetchCurrentPrice, fetchPriceOnDate } = require('./binance');
// const { fetchCurrentPrice, fetchPriceOnDate } = require('./mock');

module.exports = {
  fetchCurrentPrice,
  fetchPriceOnDate,
};