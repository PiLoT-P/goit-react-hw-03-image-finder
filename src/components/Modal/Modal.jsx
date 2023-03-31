import { createPortal } from "react-dom";
import { Component } from "react";

import css from "./Modal.module.css";

import PropTypes from "prop-types";

const modalRoot = document.querySelector("#root");

class Modal extends Component{
    static propTypes = {
        closeModal: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired
    }

    componentDidMount() {
        window.addEventListener("keydown", this.closeEscape);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.closeEscape);
    }

    closeEscape = (event) => {
        if (event.code === 'Escape') {
            this.props.closeModal();    
        }
    }

    closeMouse = (event) => {
        if (event.target === event.currentTarget) {
            this.props.closeModal();
        }
    }

    render() {
        const {url} = this.props
        return createPortal(
            <div className={css.overlay} onClick={this.closeMouse}>
                <div className={css.modal}>
                    <img src={url} alt="icon" />
                </div>
            </div>,
            modalRoot
        );
    }
}

export default Modal;