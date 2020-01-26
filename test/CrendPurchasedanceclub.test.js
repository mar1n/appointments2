import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ClubTickets from '../src/condirendering/ClubTickets';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Conditional renderning', ()=>{
    it('ClubTikets allows the user to buy tickets when he/she is at least 18 years old', () => {
        const niceClubTickets = shallow(<ClubTickets user={{ age: 18}} />);
        expect(niceClubTickets.text()).to.equal('Purchased!');
    });
    it('ClubTikets allows the user to buy tickets when he/she applies to the afternoon session(alcohol-free)', () => {
        const niceClubTickets = shallow(<ClubTickets user={{ age: 17, session:'afternoon'}} />);
        expect(niceClubTickets.text()).to.equal('Purchased!');
    });
    it('ClubTikets allows the user to buy tickets when he/she applies to the night session is < 18', () => {
        const niceClubTickets = shallow(<ClubTickets user={{ age: 17, session:'night'}} />);
        expect(niceClubTickets.text()).to.equal('Sorry, not allowed');
    });
})