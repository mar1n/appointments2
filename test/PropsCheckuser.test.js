import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import User from '../src/props/User';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Pass props', () => {
    it('Dispaly user name ', () => {
        const wrapper = shallow(<User user={'Szymon'}/>);

        wrapper.find('.userName').text();
        expect(wrapper.find('.userName').text()).to.equal('My name is Szymon');
    })
    it('Dispaly user name ', () => {
        const wrapper = shallow(<User user={'Robert'}/>);

        wrapper.find('.userName').text();
        expect(wrapper.find('.userName').text()).to.equal('My name is Robert');
    })
})