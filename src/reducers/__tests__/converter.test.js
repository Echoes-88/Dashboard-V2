import converterReducer from 'reducers/converter';
import { CHANGE_AMOUNT, CHANGE_CURRENCY, SAVE_RATES } from 'actions/converter';

it('handles actions of type CHANGE_AMOUNT', () => {
    const action = {
        type: CHANGE_AMOUNT,
        amount: 2,
        currencyId: 'currency_1'
    }

    const newState = converterReducer([], action);

    expect(newState).toEqual({currencyId: "currency_1", currency_1: {amount: 2}});
})

it('handles actions of type CHANGE_CURRENCY', () => {
    const action = {
        type: CHANGE_CURRENCY,
        currencyId: 'currency_2',
        name: 'cad'
    }

    const newState = converterReducer([], action);

    expect(newState).toEqual({amountOnChange: "currency_2", currency_2: {name: 'cad'}})
})

it('handles actions of type SAVE_RATES', () => {
    const action = {
        type: SAVE_RATES,
        rates: 1.2,
        firstConvertAmount: 1
    }

    const newState = converterReducer([], action);

    expect(newState).toEqual({currencyRates: 1.2, currency_2: {amount: 1}})
})