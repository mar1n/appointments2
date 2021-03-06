import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookDetails from '../src/render/BookDetails';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Display, use correct selector', () => {
    it('BookDetails display book information', () => {
        const bookDetails = shallow(<BookDetails />);

        const bookId = bookDetails.find('#bookId').text();
        const title = bookDetails.find('.title').text();
        const author = bookDetails.find('.author').text();

        expect(bookId).to.equal('32156');
        expect(title).to.equal('Javascript: The Good Parts');
        expect(author).to.equal('Douglas Crockford');
    });
});