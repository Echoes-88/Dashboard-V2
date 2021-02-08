export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const GET_RATES = 'GET_RATES';
export const SAVE_RATES = 'SAVE_RATES';

export const changeAmount = (amount, currencyId) => ({
    type: CHANGE_AMOUNT,
    amount,
    currencyId
})

export const changeCurrency = (name, currencyId) => ({
    type: CHANGE_CURRENCY,
    name,
    currencyId
})

export const getRates = () => ({
    type: GET_RATES
})

export const saveRates = (rates, firstConvertAmount) => ({
    type: SAVE_RATES,
    rates,
    firstConvertAmount
})