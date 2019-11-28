import React, { useState } from 'react';

import Title from '../Title/Title';
import Button from '../Button/Button';

import css from './shippingMethod.module.css';

const TEXT_DATA = {
  0: {
    firstText: '3-5 Business Days (Free Shipping)',
    secondText:
      'Allow for up to 7-10 business days for your order to process and ship.',
  },
  1: {
    firstText: '2 Business Days',
    secondText:
      'Allow for up to 7-10 business days for your order to process and ship.',
  },
};

const ShippingMethod = () => {
  const [activeButton, setActiveButton] = useState(0);

  const renderText = () => (
    <>
      <div className={css.firstText}>{TEXT_DATA[activeButton].firstText}</div>
      <div className={css.secondText}>{TEXT_DATA[activeButton].secondText}</div>
    </>
  );

  return (
    <div className={css.wrapper}>
      <Title type="h3">Shipping Method</Title>
      <div className={css.buttonWrapper}>
        <Button isActive={activeButton === 0} onClick={e => setActiveButton(0)}>
          Regular
        </Button>
        <Button isActive={activeButton === 1} onClick={e => setActiveButton(1)}>
          Two Day
        </Button>
      </div>
      {renderText()}
    </div>
  );
};

export default ShippingMethod;
