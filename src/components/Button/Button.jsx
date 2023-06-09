import css from "./Button.module.css";

import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propsTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;