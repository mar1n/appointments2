import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkdetails from '../src/Checkdetails';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Display name and surname', () => {
    it('Display details', () =>{
        const Check = shallow(<Checkdetails />);

        expect(Check.find('.name').text()).to.equal('Szymon');
        expect(Check.find('.surname').text()).to.equal('Dawidowicz');
    })
})