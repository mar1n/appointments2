import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScoreDetails from '../src/props/Analysescores';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Pass props and display', () => {
    it('ScoreDetails displays details (2 values passed)', () => {
        const scores = [54, 65];

        const scoreDetails = shallow(<ScoreDetails scores={scores} />);

        expect(scoreDetails.find('.total').text()).to.equal('Total: 2');
        expect(scoreDetails.find('.first').text()).to.equal('First: 54');
        expect(scoreDetails.find('.second').text()).to.equal('Second: 65');
    })
})