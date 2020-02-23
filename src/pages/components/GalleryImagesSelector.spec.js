import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import GalleryImagesSelector from './GalleryImagesSelector'
import sinon from "sinon";
import GalleryThumbnail from "./GalleryThumbnail";
import {MemoryRouter} from "react-router-dom";

const generateFakeImages = (quantity = 5) =>
{
    const images = [];

    for (let i = 0; i < quantity; i++)
    {
        images.push({
            getAccessUrl: () => { return "#" },
            subTitle: "subtitle-" + i,
            path: "/" + i,
            title: "title-" + i,
        });
    }

    return images;
};

describe('<GalleryImagesSelector />', () =>
{
    it('renders without crashing', () => {
        const onClick = sinon.spy();
        const fakeImages = generateFakeImages();
        const wrapper = shallow(
            <MemoryRouter>
                <GalleryImagesSelector images={fakeImages} onThumbnailClick={onClick} />
            </MemoryRouter>
        );
        const insideGalleryImagesSelector = wrapper.find(GalleryImagesSelector).dive();

        expect(insideGalleryImagesSelector.find(GalleryThumbnail).exists()).to.equal(true);
    });

    it('has 5 gallery thumbnails', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(<GalleryImagesSelector images={generateFakeImages()} onThumbnailClick={onClick} />);
        expect(wrapper.find("GalleryThumbnail")).to.has.length(5);
    });

    it('should match its reference snapshot', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(<GalleryImagesSelector images={generateFakeImages()} onThumbnailClick={onClick} />);

        expect(wrapper).to.matchSnapshot();
    });
});