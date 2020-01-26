import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChallengeResults from '../src/condirendering/ChallengeResults';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Conditional rendering', () => {
    it('ChallengeResults displays a "keep traning message when the average results are < 50', () => {
        const welcome = shallow(<ChallengeResults scores={[33, 54, 34, 23]} />);

        expect(welcome.text()).to.equal('Keep training!');
    })
    it('ChallengeResults displays a "keep traning message when the average results are >= 50', () => {
        const welcome = shallow(<ChallengeResults scores={[91, 71, 64, 79]} />);

        expect(welcome.text()).to.equal('Well done!');
    })
})