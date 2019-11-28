import React from 'react';

import LockIcon from '../../assets/icons/LockIcon';
import logoImage from '../../assets/img/Wing-Standalone-Blue-Web.png';
import css from './topnav.module.css';

const Topnav = props => {
  const handleClickBack = e => {
    console.log('Clicked back');
  };

  const handleClickSecure = e => {
    console.log('Clicked secure checkout');
  };
  return (
    <div className={css.wrapper}>
      <div className={css.backWrapper}>
        <span className={css.backArrow} onClick={handleClickBack}>
          ←
        </span>
        <span className={css.backText} onClick={handleClickBack}>
          Back
        </span>
      </div>
      <div className={css.logoWrapper}>
        <img src={logoImage} alt="Wing logo" />
      </div>
      <div className={css.secureWrapper}>
        <div className={css.secure}>
          <span className={css.secureText} onClick={handleClickSecure}>
            Secure checkout
          </span>
          <span className={css.secureicon} onClick={handleClickSecure}>
            <LockIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
