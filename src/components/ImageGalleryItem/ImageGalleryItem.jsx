import css from "./ImageGalleryItem.module.css";

import PropTypes from "prop-types";

const ImageGalleryItem = ({item, openModal}) => {
    return (
        <li className={css.item} onClick={() => openModal({ url: item.largeImageURL })}>
            <img className={css.image} src={item.webformatURL} alt="" />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    item: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem;