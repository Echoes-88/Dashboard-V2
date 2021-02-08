 
import { connect } from 'react-redux';
import Converter from '../components/Converter';
import { changeAmount, changeCurrency, getRates} from '../actions/converter';

const mapStateToProps = (state) => ({
  amount: state.converter.amount,
  currencyId: state.converter.currencyId,
  currencyRates: state.converter.currencyRates,
  currency_1: state.converter.currency_1,
  currency_2: state.converter.currency_2
});

const mapDispatchToProps = (dispatch) => ({
  changeAmount: (amount, currencyId) => {
    dispatch(changeAmount(amount, currencyId));
  },

  changeCurrency: (name, currencyId) => {
    dispatch(changeCurrency(name, currencyId));
  },

  getRates: (name) => {
    dispatch(getRates(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
