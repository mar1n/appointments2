import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Starting from '../src/iteratinglist/Starting';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';