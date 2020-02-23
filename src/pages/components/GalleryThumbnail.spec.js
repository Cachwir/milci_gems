import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import React from 'react'
import GalleryThumbnail from './GalleryThumbnail'
import {Link, MemoryRouter} from "react-router-dom";

describe('<GalleryThumbnail />', () => {
    it('should trigger its `onClick` prop when clicked', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
            <MemoryRouter>
                <GalleryThumbnail url="#" path="/" title="title" subTitle="subtitle" onThumbnailClick={onClick} />
            </MemoryRouter>
        );

        wrapper.find(GalleryThumbnail).dive().find(Link).simulate('click');
        expect(onClick).to.have.been.called();
    });

    it('should match its reference snapshot', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
            <GalleryThumbnail url="#" path="/" title="title" subTitle="subtitle" onThumbnailClick={onClick} />
        );

        expect(wrapper).to.matchSnapshot();
    });
});