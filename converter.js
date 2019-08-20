/* API's
Exchange rate: http://data.fixer.io/api/
Countries: https://restcountries.eu/rest/v2/currency/${currency}

1. getExchangeRate
2. getCountries
3. convertCurrency
*/
const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const res = await axios.get(
    'http://data.fixer.io/api/latest?access_key=cb50d38374c0eec4b37963d0908ee7e2&format=1'
  );

  const rates = res.data.rates;
  const from = rates[fromCurrency];
  const ratio = 1 / from;
  const exchangeRate = ratio * rates[toCurrency];

  console.log(exchangeRate);
};

const getCountries = async currencyCode => {
  const res = await axios.get(
    `https://restcountries.eu/rest/v2/currency/${currencyCode}`
  );

  const dataArray = res.data.map(country => country.name);
  console.log(dataArray);
};

getExchangeRate('EUR', 'USD');
getCountries('USD');
