import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from '../src/condirendering/Welcomeuser';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Conditional Rendering', () => {
    it('Displays a welcome message when the last name is provied', () => {
        const welcome = shallow(<Welcome firstName='Valentino' lastName='Rossi' />);

        expect(welcome.text()).to.equal('Welcome Mr Rossi')
    });
    it('Displays a welcome message when the last name is provied', () => {
        const welcome = shallow(<Welcome firstName='Carl' />);

        expect(welcome.text()).to.equal('Welcome Mr Carl')
    });
})