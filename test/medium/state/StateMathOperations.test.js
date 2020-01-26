import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calc from '../../../src/medium/state/Calc';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('React state', () => {
    [{
        it: `Adds the numbers if the 'add' operation is passed`,
        operation: 'add',
        expected: 'The result is: 11'
    }, {
        it: `Subtracts the numbers if the 'subtract' operation is passed`,
        operation: 'subtract',
        expected: 'The result is: 3'
    }, {
        it: 'Displays an error if the passed operation is not supported',
        operation: 'multiply',
        expected: 'This operation is not supported yet!'
    }].forEach(scenario => {

        it(scenario.it, () => {
    
            //when
            const wrapper = shallow(
                <Calc operation={scenario.operation} />
            );
            const state = wrapper.state();
    
            //then
            expect(state.a).to.equal(7);
            expect(state.b).to.equal(4);
            expect(wrapper.text()).to.equal(scenario.expected);
        });
    });
})