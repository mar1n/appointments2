import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Textuser from '../src/input/TextUser';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display input/forms', () => {
    it('Text displays email details with a default value', () => {
        const wrapper =  shallow(< Textuser 
                                    value='donald@trump.com' 
                                    placeholder='Enter your email' />); 
            
        let input = wrapper.find('input[type="text"]');

        expect(input.props().value).to.equal('donald@trump.com');
        expect(input.props().placeholder).to.equal('Enter your email');
    })
})