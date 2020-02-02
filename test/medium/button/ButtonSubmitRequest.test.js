import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Submit from '../../../src/medium/button/Submit';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Submit a request', () => {
    it('Submit shows the submission progress', async () => {
        const wrapper = shallow(<Submit />);
        const getPressMeButton = () => wrapper.find('button');

        expect(getPressMeButton().text()).to.equal('Press to submit');

        getPressMeButton().simulate('click');

        expect(getPressMeButton().text()).to.equal('Submitting...');

        await new Promise(resolve => setTimeout(resolve, 1000));

        expect(getPressMeButton().text()).to.equal('Done!');
    })
})