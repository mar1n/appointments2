import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputEmail from '../../../src/medium/input/InputEmail';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('', () => {
    it('Email displays 2 inputs and check if they match', () => {
        const wrapper = shallow(<InputEmail />);
        const getEmail = () => wrapper.find('.email');
        const getConfirmEmail = () => wrapper.find('.confirmEmail');
        const getMatchMessage = () => wrapper.find('label');

        expect(getEmail().props().value).to.equal('');
        expect(getMatchMessage().text()).to.equal('Great! Emails match');
    })
})