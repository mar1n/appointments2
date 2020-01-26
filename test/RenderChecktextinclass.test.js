import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkdetails from '../src/render/Checkdetails';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display name and surname', () => {
    it('Display details', () =>{
        const Check = shallow(<Checkdetails />);

        expect(Check.find('.name').text()).to.equal('Szymon');
        expect(Check.find('.surname').text()).to.equal('Dawidowicz');
    })
})