import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../src/condirendering/Film';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Conditional rendering', () => {
    it('FilmScore identifies "poor" movies', () => {
        const filmScore = shallow(<Film title='Alien vs Predator' score={45} />);
        expect(filmScore.text()).to.equal('Poor');
    })
    it('FilmScore identifies "nice" movies', () => {
        const filmScore = shallow(<Film title='Top Gun' score={68} />);
        expect(filmScore.text()).to.equal('Nice');
    })
    it('FilmScore identifies "excellent" movies', () => {
        const filmScore = shallow(<Film title='A Clockwork Orange' score={82} />);
        expect(filmScore.text()).to.equal('Excellent');
    })
})