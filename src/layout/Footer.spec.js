import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <Footer />
        );

        expect(wrapper).to.matchSnapshot();
    });
});