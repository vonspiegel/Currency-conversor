/*
1. getExchangeRate
2. getCountries
3. convertCurrency
*/

const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const res = await axios.get(
      'http://data.fixer.io/api/latest?access_key=cb50d38374c0eec4b37963d0908ee7e2&format=1'
    );

    const rates = res.data.rates;
    const from = rates[fromCurrency];
    const ratio = 1 / from;
    const exchangeRate = ratio * rates[toCurrency];

    return exchangeRate;
  } catch (err) {
    throw err.message;
  }
};

const getCountries = async currencyCode => {
  const res = await axios.get(
    `https://restcountries.eu/rest/v2/currency/${currencyCode}`
  );

  const dataArray = res.data.map(country => country.name);
  return dataArray;
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const countries = await getCountries(toCurrency);
  const total = (amount * exchangeRate).toFixed(2);

  return `${amount} ${fromCurrency} are ${total} ${toCurrency} that can be spent in ${countries}`;
};

convertCurrency('JPY', 'EUR', 4000000)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error.message);
  });
