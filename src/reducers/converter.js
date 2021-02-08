import { CHANGE_AMOUNT, CHANGE_CURRENCY, SAVE_RATES } from '../actions/converter';


export const initialState = {
  currencyRates: [],
  currencyId: "currency_1",
  currency_1: {
    name: "eur",
    amount: 1
  },
  currency_2: {
    name: "usd",
    amount: 1
  }

};

const data = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return {
        ...state,
        currencyId: action.currencyId,
        [action.currencyId]: {
          ...state[action.currencyId],
          amount: action.amount
        }
      };
      case CHANGE_CURRENCY:
        return {
          ...state,
          amountOnChange: action.currencyId,
          [action.currencyId]: {
            ...state[action.currencyId],
            name: action.name
          }
        };
        case SAVE_RATES:
          return {
            ...state,
            currencyRates: action.rates,
            currency_2: {
              ...state.currency_2,
              amount: action.firstConvertAmount
            }
          };
    default:
      return state;
  }
};

export default data;
