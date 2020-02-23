import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import React from 'react'
import Menu from "./Menu";
import App from "../App";
import {MemoryRouter} from "react-router-dom";
import GalleryThumbnail from "../pages/components/GalleryThumbnail";

describe('<Menu />', () => {
    // it('contains all the links to the AppRouter\'s routes', () => {
    //     console.log(Object.keys(Menu.PAGES_DATA));
    //     const FalseApp = shallow(<App />);
    //     const wrapper = shallow(
    //         <MemoryRouter>
    //             <Menu Parent={FalseApp} />
    //         </MemoryRouter>
    //     );
    //     Object.keys(Menu.PAGES_DATA).forEach((pageDataKey) => {
    //         console.log(Menu.PAGES_DATA[pageDataKey].path());
    //         expect(wrapper.find("Link[to=\"/gallery\"]")).to.exist();
    //         // expect(wrapper.find("Link[to=\""+ Menu.PAGES_DATA[pageDataKey].path() +"\"]")).to.exist();
    //     });
    // });

    it('should match its reference snapshot', () => {
        const FalseApp = shallow(<App />);
        const wrapper = shallow(
            <Menu Parent={FalseApp} />
        );

        expect(wrapper).to.matchSnapshot();
    });

    // it('should trigger its `onClick` prop when clicked', () => {
    //     const onClick = sinon.spy();
    //     const wrapper = shallow(
    //         <Menu card="😁" feedback="hidden" index={0} onClick={onClick} />
    //     );
    //
    //     wrapper.simulate('click');
    //     expect(onClick).to.have.been.calledWith(0)
    // })
    //
    // it('should match its reference snapshot', () => {
    //     const onClick = sinon.spy();
    //     const wrapper = shallow(
    //         <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    //     );
    //
    //     expect(wrapper).to.matchSnapshot();
    // })
})