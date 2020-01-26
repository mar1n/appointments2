import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FruitPicker from '../src/basic/input/FruitSelect';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display input/form', () => {
    it('FruitPicker allows user to select Apple and Orange', () => {

        const wrapper = shallow(<FruitPicker selected='Orange' />);

        let select = wrapper.find('select');

        expect(select.props().value).to.equal('Orange');
    })
})