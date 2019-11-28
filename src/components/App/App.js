import React from 'react';

import Topnav from '../Topnav/Topnav';
import Title from '../Title/Title';
import OrderCard from '../OrderCard/OrderCard';
import PaymentOptions from '../PaymentOptions/PaymentOptions';
import ShippingMethod from '../ShippingMethod/ShippingMethod';

import '../../assets/css/index.css';
import css from './app.module.css';

const cardData = {
  items: [
    {
      title: 'Samsung Galaxy Note 9 128GB Ocean Blue (new)',
      img: '/img/samsungNote9.png',
      amount: 1,
      price: 999.99,
    },
  ],
  subtotal: 999.99,
  shipping: 1.99,
  insurance: 1.99,
  taxes: 168.48,
  total: 1168.47,
};

function App() {
  return (
    <div className={css.root}>
      <Topnav />
      <div className={css.appWrapper}>
        <Title type="h1" wrapperClassName={css.titleH1Wrapper}>
          Payment and Billing
        </Title>
        <Title type="h2" wrapperClassName={css.titleH2Wrapper}>
          Order Summary
        </Title>
        <OrderCard data={cardData} />
        <ShippingMethod />
        <PaymentOptions />
      </div>
    </div>
  );
}

export default App;
