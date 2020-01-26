import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Starting from '../src/iteratinglist/Starting';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Display list of elements', () => {
    it('StartingGrid reverses a list of 3 teams', () => {
        const startingGrid = shallow(<Starting teams={['Ferrari', 'McLaren', 'Williams']} />);

        let positions = startingGrid.find('.position');

        expect(positions).to.have.length(3);
        expect(positions.at(0).text()).to.equal('1. Williams');
        expect(positions.at(1).text()).to.equal('2. McLaren');
        expect(positions.at(2).text()).to.equal('3. Ferrari');
    })
})