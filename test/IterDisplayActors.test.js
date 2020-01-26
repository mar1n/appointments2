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

describe('Display list of elements', () => {
    it('Actors displays a list of 3 actors', () => {
        const actors = shallow(<Actors names={['Arnold', 'Silvester', 'Steven']} />);
        let paragraphs = actors.find('p');
    })
})