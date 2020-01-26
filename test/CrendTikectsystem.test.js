import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BuyTikets from '../src/condirendering/BuyTikets';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Conditional rendering', () => {
    it('BuyTikets doesn\'t allow the user to proceed the he/she is below 18', () => {

        let user = { name: 'Anthony', age: 16 };

        const buyTikets = shallow(<BuyTikets user={user} />);

        expect(buyTikets.text()).to.equal('Sorry, try again you turn 18');
    })
    it('BuyTikets doesn\'t allow the user to proceed the he/she is below 18', () => {

        let user = { name: 'Anthony', age: 21 };

        const buyTikets = shallow(<BuyTikets user={user} />);

        expect(buyTikets.text()).to.equal('Enjoy the show!');
    })
});