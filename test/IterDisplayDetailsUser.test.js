import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import User from '../src/iteratinglist/UserDetails';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Display list of elemnts', () => {
    it('User displays name age details', () => {
        const user = shallow(<User user={{ name: 'Peter', age: 31}} />);

        let details = user.find('.details');

        expect(details).to.have.length(2);
        expect(details.at(0).text()).to.equal('name: Peter');
        expect(details.at(1).text()).to.equal('age: 31');
    })
})