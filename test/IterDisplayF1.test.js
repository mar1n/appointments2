import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WorldChampions from '../src/iteratinglist/WorldChampions';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display list of elements', () => {
    it('WorldChampions filters out the one-champion drivers', () => {
        const wrapper = shallow(<WorldChampions drivers={[
            { name: 'Nigel Mansell', isWorldChampion: true },
            { name: 'Keke Rosbert', isWorldChampion: false },
            { name: 'Alain Prost', isWorldChampion: true }
        ]} />);

        let labels = wrapper.find('label');

        expect(labels).to.have.length(2);
        expect(labels.at(0).text()).to.equal('Nigel Mansell');
        expect(labels.at(1).text()).to.equal('Alain Prost');
    })
    it('WorldChampions doesn\'t display anything if no champions are provided', () => {
        const wrapper = shallow(<WorldChampions drivers={[
            { name: 'Tarso Marques', isWorldChampion: false },
        ]} />);

        let labels = wrapper.find('label');

        expect(labels).to.have.length(0);;
    })
})