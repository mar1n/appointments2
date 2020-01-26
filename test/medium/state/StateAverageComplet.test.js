import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AverageScore from '../../../src/medium/state/AverageScoreComplet';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('React state', () => {
    it('AverageScore display the rounded score of a player', () => {
        const wrapper = shallow(<AverageScore newScore={61} />);
        const state = wrapper.state();

        expect(state.firstScore).to.equal(78);
        expect(state.secondScore).to.equal(81);
        expect(wrapper.text()).to.equal('The average score is: 73');
    })
})