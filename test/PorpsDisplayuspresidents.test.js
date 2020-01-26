import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import President from '../src/props/President';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Pass props and display them', () => {
    it('President display details for Bill Clinton', () => {
        const president = shallow(<President firstName='Bill' lastName='Clinton' />);

        expect(president.find('.firstName').text()).to.equal('First name: Bill');
        expect(president.find('.lastName').text()).to.equal('Last name: Clinton');
    });
    it('President display details for Barack Obama', () => {
        const president = shallow(<President firstName='Barack' lastName='Obama' />);

        expect(president.find('.firstName').text()).to.equal('First name: Barack');
        expect(president.find('.lastName').text()).to.equal('Last name: Obama');
    });
});