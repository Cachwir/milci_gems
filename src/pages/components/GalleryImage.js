import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ path, title, subTitle, text, source }) => (
    <div>
        <article className="top-image">
            <figure className="post-img picture">
                    <img src={path} alt={title} />
            </figure>
        </article>
        <article className="post">
            <h3 className="margin">{title}</h3>
            <span>{subTitle}</span>
            <p>{text}</p>
            <div className="right">
                <a href={source} target="_blank" rel="noopener noreferrer">source</a>
            </div>
        </article>
    </div>
);

GalleryImage.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
};

export default GalleryImage;