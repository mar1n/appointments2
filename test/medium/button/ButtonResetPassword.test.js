import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Submit from '../../../src/medium/button/Submit';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Reseting users\'s password', () => {
    it('ResetPassword disables the files while processing', async () => {

        const wrapper = shallow(<ResetPassword />);
        const getEmailInput = () => wrapper.find('input[type="email"]');
    })
})