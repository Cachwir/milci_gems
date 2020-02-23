import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import About from './About'

describe('<About />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <About />
        );

        expect(wrapper).to.matchSnapshot();
    });
});