import React from 'react';
import PropTypes from 'prop-types';

import { setClass } from '../../utils/helpers';

import css from './title.module.css';

const Title = ({ type, className, wrapperClassName, children }) => {
  const renderH1 = () => (
    <h1
      className={setClass({
        [css.title]: true,
        [css.titleH1]: true,
        [className]: className,
      })}
    >
      {children}
    </h1>
  );

  const renderH2 = () => (
    <h2
      className={setClass({
        [css.title]: true,
        [css.titleH2]: true,
        [className]: className,
      })}
    >
      {children}
    </h2>
  );

  const renderH3 = () => (
    <h2
      className={setClass({
        [css.title]: true,
        [css.titleH3]: true,
        [className]: className,
      })}
    >
      {children}
    </h2>
  );

  const renderTitle = () => {
    switch (type) {
      case 'h1': {
        return renderH1();
      }
      case 'h2': {
        return renderH2();
      }
      case 'h3': {
        return renderH3();
      }
      default: {
        return renderH3();
      }
    }
  };

  return (
    <div className={setClass({ [wrapperClassName]: wrapperClassName })}>
      {renderTitle()}
    </div>
  );
};

Title.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default Title;
