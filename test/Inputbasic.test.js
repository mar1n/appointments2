import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from '../src/input/Text';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display input/forms', () => {
    it('Text displays a basic input text with a value and a placeholder', () => {
        const wrapper = shallow(<Text />);

        let input = wrapper.find('input[type="text"]');

        expect(input.props().value).to.equal('My first input!');
        expect(input.props().placeholder).to.equal('This text is visible when input is blank');
    })
})