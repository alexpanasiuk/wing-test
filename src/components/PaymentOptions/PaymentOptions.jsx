import React, { useState } from 'react';

import Title from '../Title/Title';
import Button from '../Button/Button';

import affirmLogo from '../../assets/img/affirm.png';
import css from './paymentOptions.module.css';

const PaymentOptions = () => {
  const [activeButton, setActiveButton] = useState(0);

  const renderText = () => (
    <div className={css.textWrapper}>
      <span className={css.text}>
        Starting at
        <span className={css.blue}> ${activeButton ? '5' : '93'}</span>/
        {activeButton ? 'day' : 'mo'} with{' '}
        <img className={css.affirmLogo} src={affirmLogo} alt="Affirm logo" />
      </span>
      <br></br>
      <span className={css.text}>0% APR financing upon approval.</span>
    </div>
  );

  return (
    <div className={css.wrapper}>
      <Title type="h3">Payment Options</Title>
      <div className={css.buttonWrapper}>
        <Button isActive={activeButton === 0} onClick={e => setActiveButton(0)}>
          Pay Monthly
        </Button>
        <Button isActive={activeButton === 1} onClick={e => setActiveButton(1)}>
          Pay Today
        </Button>
      </div>
      {renderText()}
      <a
        href={window.location}
        target="_blank"
        rel="noopener noreferrer"
        className={css.learnMore}
      >
        Learn more.
      </a>
      <button className={css.button}>Finance Now</button>
      <p className={css.continueText}>
        Continue with our financing partner, Affirm, to complete the monthly
        payment set up. Once completed, you will be redirected back to Wing.
      </p>
    </div>
  );
};

export default PaymentOptions;
