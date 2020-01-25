import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TotalScore from '../src/Totalscore';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Pass props and display', () => {
    it('TotalScore returns the accumulated score (bad results)', () => {
        const totalScore = shallow(<TotalScore scores={[34, 35,36]} />);

        expect(totalScore.text()).to.equal('The total score is: 105');
    })
})