import React, {Component} from "react";
import {Route} from "react-router-dom";
import { withRouter } from "react-router";
import {AnimatedSwitch} from "react-router-transition";
import axios from 'axios';
import GalleryImage from "./components/GalleryImage";
import GalleryImagesSelector from "./components/GalleryImagesSelector";

import "./Gallery.css";
import {localStorageGet, localStorageSet} from "../lib/functions";
import Config from "../lib/Config";

class GalleryWithoutRouter extends Component
{
    FETCH_POST_ROUTE    = "posts/";
    PATH_TO_POST_IMAGES = "/assets/dynamic/postImages/";

    constructor() {
        super();
        this.localStorageCurrentImageIdKey = "currentImageId";
        this.defaultImageId = 0;
        this.currentImageId = this.getCurrentImageId();
        this.state = {
            images: [],
        }
    }

    getFetchPostUrl() {
        return Config.getBackendUrl() + this.FETCH_POST_ROUTE;
    }

    getImageUrl = (imageId) =>
    {
        const { url } = this.props.match;
        return url + "/" + imageId + "-" + encodeURI(this.state.images[imageId].title
            .replace(" ", "")
            .replace("é", "e")
            .replace("è", "e")
            .replace("à", "a")
            .replace("ù", "u")
        );
    };

    componentDidMount()
    {
        // Retrieves the posts
        this.fetchPosts()
            .then(response =>
            {
                if (typeof response.data !== "undefined" && response.data.length > 0)
                {
                    this.addImages(response.data);
                }
            })
            .catch((error) =>
            {
                console.log(error);
            })
    }

    fetchPosts()
    {
        // Retrieves the posts
        return axios.get(this.getFetchPostUrl());
    }

    // fx binding to conserve this
    addImages = (imagesData) =>
    {
        const images = [];

        imagesData.forEach((imageData) =>
        {
            images.push({
                title: imageData.title,
                subTitle: imageData.subtitle,
                path: this.PATH_TO_POST_IMAGES + imageData.image,
                text: imageData.text,
                source: imageData.source,
                getAccessUrl: this.getImageUrl,
            });
        });

        this.setState({
            images: images
        });
    };

    getCurrentImageId()
    {
        return localStorageGet(this.localStorageCurrentImageIdKey, this.defaultImageId);
    }

    setCurrentImageId(newImageId)
    {
        this.currentImageId = newImageId;
        localStorageSet(this.localStorageCurrentImageIdKey, newImageId);
    }

    // keeping this on fx binding
    onRouteChanged = (newCurrentImageId) =>
    {
        if (this.currentImageId !== newCurrentImageId)
        {
            this.setCurrentImageId(newCurrentImageId);
        }
    };

    render()
    {
        const doesFirstImageExist = typeof this.state.images[this.currentImageId] !== "undefined";

        return (
            <section className="gallery">
                <div id="content">

                    <div className="container floated">

                        {/* Page Content */}
                        <div className="gallery-current-element eleven floated left">
                            <AnimatedSwitch
                                atEnter={{
                                    opacity: 0,
                                    marginLeft: -100,
                                }}
                                atLeave={{
                                    opacity: 0,
                                    marginLeft: 0,
                                }}
                                atActive={{
                                    opacity: 1,
                                    marginLeft: 0,
                                }}
                                className="switch-wrapper"
                            >
                                {/* A <Switch> looks through its children <Route>s and
                                 renders the first one that matches the current URL. */}
                                {doesFirstImageExist && (
                                    <Route key={-1} exact path={"/gallery"}>
                                        <GalleryImage {...this.state.images[this.currentImageId]} />
                                    </Route>
                                )}
                                {this.state.images.map((galleryImage, index) => (
                                    <Route key={index} exact path={this.getImageUrl(index)}>
                                        <GalleryImage {...galleryImage} />
                                    </Route>
                                ))}
                            </AnimatedSwitch>
                        </div>
                        {/* Page Content / End */}

                        {/* Sidebar */}
                        <div className="gallery-images-selector-container four floated sidebar right">
                            <GalleryImagesSelector images={this.state.images} onThumbnailClick={this.onRouteChanged}/>
                        </div>
                        {/* Sidebar / End */}
                    </div>

                </div>
            </section>
        );
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const Gallery = withRouter(GalleryWithoutRouter);

export default Gallery;