import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputClear from '../../../src/medium/input/InputSalary';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Button, display, hide, controll, check ', () => {
    it('ResetableInput shows an input and a button to reset it', () => {
        const wrapper = shallow(<InputButton />);
        const getInput = () => wrapper.find('input[type="text"]');
        const getResetButton = () => wrapper.find('button');

        expect(getInput().props().value).to.equal('Charlotte');
        expect(getResetButton().text()).to.equal('Reset');

        getResetButton().simulate('click');

        expect(getInput().props().value).to.equal('');
    })
})