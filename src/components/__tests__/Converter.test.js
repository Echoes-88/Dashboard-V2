import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import Converter from 'containers/Converter';
import Currencies from 'components/Converter/Currencies'

let component;

beforeEach(() => {
    component = mount(
        <Root>
            <Converter />
        </Root>
    );
})

afterEach(() => {
    component.unmount();
})

it('Has 2 input and 2 select', () => {
    expect(component.find('input').length).toEqual(2)
    expect(component.find('select').length).toEqual(2)
})

it('Has 2 Currencies component', () => {
    expect(component.find(Currencies).length).toEqual(2);
})

// it('Has a Currencies component where use can change currencie', () => {
//     expect(component.find('[currencyId="currency_1"]').at(2).prop('value')).toEqual('default');
// })

// describe('The first select currencies component', () => {
//     beforeEach(() => {
//         expect(component.find('select[name="currency_1"]').simulate('change', {
//             target: { 
//                 value: "CAD"
//             }
//         }));
//         component.update();
//     });

//     it('Has a Currencies component where user can change currencie', () => {
//         expect(component.find('select[name="currency_1"]').prop('value')).toEqual('CAD');
//     })
// })

describe('The first select currencies component', () => {
    beforeEach(() => {
        expect(component.find('select[name="currency_1"]').simulate('change', {
            target: { 
                value: "CAD"
            }
        }));
        component.update();
    });

    it('Has a Currencies component where user can change currencie', () => {
        expect(component.find('select[name="currency_1"]').prop('value')).toEqual('CAD');
    })
})


