import { changeAmount, CHANGE_AMOUNT } from 'actions/converter';


describe('changeAmount', () => {
    it('has the correct type', () => {
        const action = changeAmount();

        expect(action.type).toEqual(CHANGE_AMOUNT);
    })

    it('has the correct payload', () => {
        const action = changeAmount('2', 'currency_1');

        expect(action.amount).toEqual('2');
        expect(action.currencyId).toEqual('currency_1');
    })
})