import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import {Route} from "react-router-dom";
import axios from 'axios';
import Gallery from "./Gallery";
import GalleryImage from "./components/GalleryImage";

const prepareMemoryRouter = () =>
{
    axios.get.mockImplementationOnce(() => Promise.resolve({}));

    const wrapper = shallow(
        <Gallery.WrappedComponent />
    );
    wrapper.setProps({
        match: "https://my_fake_url.com",
    });

    wrapper.instance().addImages(generateFakeImages());

    return wrapper;
};

const generateFakeImages = (quantity = 5) =>
{
    const images = [];

    for (let i = 0; i < quantity; i++)
    {
        images.push({
            title: "title-" + i,
            subtitle: "subtitle-" + i,
            text: "text-" + i,
            image: "image-" + i + ".jpg",
            source: "#",
        });
    }

    return images;
};

jest.mock('axios');

describe('<Gallery />', () =>
{
    it('renders without crashing', () => {
        const wrapper = prepareMemoryRouter();
        expect(wrapper.find(GalleryImage).exists()).to.equal(true);
    });

    it('has 6 routes', () => {
        const wrapper = prepareMemoryRouter();
        expect(wrapper.find(Route)).to.has.length(6);
    });

    it('should match its reference snapshot', () => {
        const wrapper = prepareMemoryRouter();
        expect(wrapper).to.matchSnapshot();
    });
});