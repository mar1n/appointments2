import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DriverDetails from '../../../src/medium/button/DriverDetails';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Toggle driver details', () => {
    it('DriverDetails toggles driver stats', () => {
        const wrapper = shallow(<DriverDetails />);
        const getPressMeButton = () => wrapper.find('button');
        const getDetails = () => wrapper.find('label.details');

        expect(getPressMeButton().text()).to.equal('Toggle driver details');
        expect(getDetails().exists()).to.equal(false);

        getPressMeButton().simulate('click');

        expect(getDetails().exists()).to.equal(true);
        expect(getDetails().text()).to.equal('Races: 314, Titles: 2, Poles: 22');

        getPressMeButton().simulate('click');

        expect(getDetails().exists()).to.equal(false);
    })
})