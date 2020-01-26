import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Textarea from '../src/basic/input/Textarea';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display input/forms', () => {
    it('Textarea displays a multi-line input (user thoughts)', () => {
        const wrapper = shallow(<Textarea
            value='Over 300 languages are spoken in London'
            placeholder='Please share your thoughts' />)

        let textarea = wrapper.find('textarea');

        expect(textarea.props().value).to.equal('Over 300 languages are spoken in London');
        expect(textarea.props().placeholder).to.equal('Please share your thoughts');
    })
})