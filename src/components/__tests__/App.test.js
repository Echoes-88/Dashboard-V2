import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

import Converter from 'containers/Converter';

let component;

beforeEach(() => {
    component = shallow(<App />);
})

it('shows a converter component', () => {
    expect(component.find(Converter).length).toEqual(1);
})