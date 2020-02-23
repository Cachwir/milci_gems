import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import Gallery from "./Gallery";

describe('<Gallery />', () =>
{
    it('fetches successfully the posts from the API', async () =>
    {
        const wrapper = shallow(
            <Gallery.WrappedComponent />
        );

        wrapper.setProps({
            match: "https://my_fake_url.com",
        });

        const posts = (await wrapper.instance().fetchPosts()).data;

        if (posts.length === 0)
        {
            console.warn("Aucun post en base de données");
        }

        const firstPost = posts[0];

        expect(firstPost).to.be.object().which.includes.all.keys([
            "title",
            "subtitle",
            "text",
            "image",
            "source",
        ]);
    });
});