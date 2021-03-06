import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PressMe from '../../../src/medium/button/PressMe';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Press the button!', () => {
    it('PressMe checks wheter the button has been pressed or not', () => {
        const wrapper = shallow(<PressMe />);
        const getPressMeButton = () => wrapper.find('button');
        const getMessage = () => wrapper.find('label');

        expect(getPressMeButton().text()).to.equal('Press Me!');
        expect(getMessage().text()).to.equal('Button not pressed yet');

        getPressMeButton().simulate('click');

        expect(getMessage().text()).to.equal('Has been Pressed!');
    })
})