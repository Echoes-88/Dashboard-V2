/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';

// import './converter.scss';

import Currencies from './Currencies';



const Converter = ({ currency_1, currency_2, changeAmount, changeCurrency, getRates, currencyRates, currencyId, result }) => {

    useEffect(() => {
      getRates(currency_1.name);
    }, [currency_1.name]);

    // OnChange amount upload inputvalue and calculate conversion
    const handleAmount = (e, currencyId) => {
      const amount = e.target.value;
      changeAmount(amount, currencyId)
      convert(amount, currencyId);
    }

    // OnChange currency upload currency on state and calculate conversion
    const handleCurrency = (name, currencyId) => {

      changeCurrency(name, currencyId)

      if(currencyId === "currency_1") {
        getRates(currency_1.name);
      } else {
        const rate = currencyRates[name].rate;
        const newAmount = currency_1.amount*rate;
  
        changeAmount(newAmount, "currency_2")
      }

    }

    const convert = (amount, currencyId) => {

        if(currencyId === "currency_1") {
          const rate = currencyRates[currency_2.name].rate;
          const newAmount = amount*rate;

          changeAmount(newAmount  , "currency_2")

        } else {
          const rate = currencyRates[currency_2.name].rate;
          const newAmount = amount/rate;
    
          changeAmount(newAmount  , "currency_1")
        }
    }


  return (
    <div className="converter-container">
      <h2>Converter</h2>

      <div>
        <input className="inputAmount1" onChange={(e) => handleAmount(e, "currency_1")} value={currency_1.amount}></input>
      </div>

      <Currencies 
        className="converter-field" 
        handleCurrency={handleCurrency} 
        currencyId="currency_1"
        currencyName="EUR - euro"
      />

      <div>↓</div>

      <div>
        <input onChange={(e) => handleAmount(e, "currency_2")} value={currency_2.amount}></input>
      </div>

      <Currencies 
        className="converter-field" 
        handleCurrency={handleCurrency} 
        currencyId="currency_2"
        currencyName="USD - US Dollar"
      />

      {/* <div className="converter-field">{amount.value} {firstCurrency.name} = {makeConversion()} {secondCurrency.name}</div> */}

    </div>
  );
};

// == Export
export default Converter;
