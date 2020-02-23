import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import Header from './Header'

describe('<Header />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <Header />
        );

        expect(wrapper).to.matchSnapshot();
    });
});