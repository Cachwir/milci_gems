import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import App from './App'
import sinon from "sinon";
import Header from "./layout/Header";

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.contain(<Header />);
    });

    it('should match its reference snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.matchSnapshot();
    });
})