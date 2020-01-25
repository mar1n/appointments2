import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from '../src/render/Welcome';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Welcome', () => {
	//when

    it('Displays a welcome message', () => {
        const welcome = shallow(<Welcome />);

        //then
        expect(welcome.text('.test')).to.equal('Welcome to React!');
    });
});