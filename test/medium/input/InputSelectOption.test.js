import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputSelect from '../../../src/medium/input/InputSelect';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display Select and change select', () => {
    it('FruitPicker allows user to select Apple and Orange', () => {
        const wrapper = shallow(<InputSelect selected='Apple' />);
        const getSelector = () => wrapper.find('select');

        expect(getSelector().find('option').at(0).text()).to.equal('Apple');
        expect(getSelector().find('option').at(1).text()).to.equal('Orange');
        expect(getSelector().props().value).to.equal('Apple');
        getSelector().simulate('change', { target: { value: 'Orange' }});

        expect(getSelector().props().value).to.equal('Orange');
    })
})