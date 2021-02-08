import axios from 'axios';
import { GET_RATES, saveRates } from '../actions/converter';

const getRates = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RATES: {
      const state = store.getState();

      const { name, amount } = state.converter.currency_1;

      const currency2Name = state.converter.currency_2.name;

        axios.get(`http://www.floatrates.com/daily/${name}.json`)
        .then((response) => {

          // Calculate first convertion to display onLoad
          const firstConvertAmount = amount*response.data[currency2Name].rate;

        store.dispatch(saveRates(response.data, firstConvertAmount));

        }).catch((error) => console.log(error))
        .finally();

      break;
    }
    default:
      next(action);
  }
};

export default getRates;