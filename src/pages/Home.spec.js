import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import Home from './Home'

describe('<Home />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <Home />
        );

        expect(wrapper).to.matchSnapshot();
    });
});