import React from 'react';
import PropTypes from 'prop-types';
import GalleryThumbnail from "./GalleryThumbnail";

const GalleryImagesSelector = ({images, onThumbnailClick}) => (
    <div className="gallery-images-selector">

        <div>
            <h3 className="margin">Autres minéraux</h3>
        </div>

        <div className="gallery-thumbnails">
            {images.map((image, index) => {
                return (
                    <GalleryThumbnail
                        key={index}
                        url={image.getAccessUrl(index)}
                        subTitle={image.subTitle}
                        path={image.path}
                        title={image.title}
                        onThumbnailClick={() => {
                            onThumbnailClick(index);
                        }}
                    />
                );
            })}
        </div>

    </div>
);

GalleryImagesSelector.propTypes = {
    images: PropTypes.array.isRequired,
};

export default GalleryImagesSelector;