import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../../src/medium/input/Input';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Input Display, check, controll', () => {
    it('Salalry exposes the salary expectation of player', () => {
        const wrapper = shallow(<Salary />);
        const 
    })
})