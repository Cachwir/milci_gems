import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const GalleryThumbnail = ({ url, path, title, subTitle, onThumbnailClick }) => (
    <div>
        <Link to={url} className="portfolio-item isotope" onClick={onThumbnailClick}>
            <figure>
                <div className="picture"><img src={path}
                                              alt=""/>
                    <div className="image-overlay-link"></div>
                </div>
                <figcaption className="item-description">
                    <h5>{title}</h5>
                    <span>{subTitle}</span>
                </figcaption>
            </figure>
        </Link>
    </div>
);

GalleryThumbnail.propTypes = {
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default GalleryThumbnail;