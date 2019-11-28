import React from 'react';
import PropTypes from 'prop-types';

import { setClass } from '../../utils/helpers';
import css from './button.module.css';

const Button = ({ onClick, isActive, children }) => {
  return (
    <button
      className={setClass({ [css.button]: true, [css.active]: isActive })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default Button;
