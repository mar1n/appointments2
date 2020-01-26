import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StateMessage from '../../../src/medium/state/StateMessage';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('React state', () => {
    it('Displays a message from state', () => {
        const wrapper = shallow(<StateMessage />);

        expect(wrapper.state().message).to.equal('Hello!');
        expect(wrapper.text()).to.equal('Hello!');
    })
})