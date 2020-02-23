import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import GalleryImage from './GalleryImage'

describe('<GalleryImage />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <GalleryImage path="/" title="title" subTitle="subtitle" text="some text" source="#" />
        );

        expect(wrapper).to.matchSnapshot();
    });
});