import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../../src/medium/input/Input';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Input Display, check, controll', () => {
    it('Input displays a controlled input field', () => {
        const wrapper = shallow(<Input />);
        const getInput = () => wrapper.find('input[type="text"]');

        expect(getInput().props().value).to.equal('Peter');

        getInput().simulate('change', { target: { value : 'Olivia'}});

        expect(getInput().props().value).to.equal('Olivia');
    })
})