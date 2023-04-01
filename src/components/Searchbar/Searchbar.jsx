import { Component } from "react";

import css from "./Searchbar.module.css";

import PropTypes from "prop-types";

class Searchbar extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = {
        input: '',
    }

    hendelSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.input);
    }

    render() {
        return (
            <header className={css.searchbar} onSubmit={this.hendelSubmit}>
                <form className={css.form}>
                    <button type="submit" className={css.button}>
                    <span className={css.label}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.input}
                        onChange={(e)=> this.setState({input: e.target.value})}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;