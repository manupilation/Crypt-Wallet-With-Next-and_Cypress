import React, {use} from 'react'

const useCurrencies = (currencyList) => {
  const filterCoins = Object.keys(currencyList);
  const filterCurrencies = filterCoins.filter((item) => item !== 'USDT');

  return filterCurrencies;
}

export default useCurrencies;
