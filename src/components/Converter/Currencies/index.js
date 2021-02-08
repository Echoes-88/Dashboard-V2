/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// == Import npm
import React from 'react';
import currencies from '../currenciesDatas';

const Currencies = ({handleCurrency, currencyId, currencyName}) => {


  const currencieHandler = (e) => {
    e.preventDefault();
    const currencyName = e.target.value.toLowerCase();
    handleCurrency(currencyName, currencyId)
  }

  return (
    <div className="converter-field">
    <select name={currencyId} onChange={currencieHandler}>
      <option value="default">{currencyName}</option>
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>{currency.code} - {currency.name}</option>
      ))}
    </select>
  </div>
    
  );
};

// == Export
export default Currencies;
