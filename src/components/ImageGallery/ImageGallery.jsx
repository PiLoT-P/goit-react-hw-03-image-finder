import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

import PropTypes from "prop-types";

const ImageGallery = ({gallery, openModal}) => {
    return (
        <ul className={css.gallery} >
            {gallery.map((item) => (<ImageGalleryItem key={item.id} item={item} openModal={openModal} />))}
        </ul>
    );
}

ImageGallery.propTypes = {
    gallery: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
}

export default ImageGallery;