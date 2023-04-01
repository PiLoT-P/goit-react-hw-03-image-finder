import { Component } from "react";
import { getDataServer } from '../../server/server.js';

import ImageGallery from "components/ImageGallery/ImageGallery.jsx";
import Button from "components/Button/Button.jsx";
import Loader from "components/Loader/Loader.jsx";
import Modal from "components/Modal/Modal.jsx";

import PropTypes from "prop-types";

class PhotoPage extends Component{
    static propTypes = {
        query: PropTypes.string.isRequired,
    }

    state = {
        gallery: [],
        totalPage: false,
        page: 1,
        query: '',
        isLoading: false,
        error: null,
        modalData: null,
    }

    static getDerivedStateFromProps(props, state) {
        if (state.query !== props.query) {
        return { page: 1, query: props.query };
        }
        return null;
    }

    async componentDidUpdate(prevProps, prevState) {
        const { page, query } = this.state;
        if (
            (prevProps.query !== query && query !== "") ||
            (prevState.page !== page && page !== 1)
        ) {
            this.setPhotos();
        }
    }

    setPhotos = async () => {
        const { page, query } = this.state;
        this.setState({ isLoading: true, error: null });

        try {
            const data = await getDataServer(query, page);
            if (data.hits.length === 0) {
                this.setState({ totalPage: true });
            } else {
                this.setState((prev) => ({
                    gallery: page === 1 ? data.hits : [...prev.gallery, ...data.hits],
                }))
            }
        } catch (error) {
            this.setState({ error: error.message });
        } finally {
            this.setState({ isLoading: false });
        }
    }
    
    changePage = () => {
        this.setState((prev) => ({ page: prev.page + 1 }));
    };

    closeModal = () => {
        this.setState({ modalData: null });
    };

    openModal = (modalData) => {
        this.setState({ modalData });
    }

    render() {
        const { gallery, error, modalData, totalPage } = this.state;

        return (
            <>
                {this.state.isLoading && <Loader/>}
                {error ? (
                    <h2>{error}</h2>
                ) : (
                    <>
                        <ImageGallery gallery={gallery} openModal={this.openModal}/>
                        {gallery.length > 0 && !totalPage ? (<Button onClick={this.changePage}/>): (<div></div>)}
                    </>
                )}
                {modalData && (<Modal {...modalData} closeModal={this.closeModal}/>)}
            </>
        );
    }
}

export default PhotoPage;