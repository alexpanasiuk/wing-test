import React from 'react';
import PropTypes from 'prop-types';

import { splitNumWithComa } from '../../utils/helpers';

import css from './orderCard.module.css';

const fullPricesList = [
  {
    label: 'subtotal',
    key: 'subtotal',
  },
  {
    label: 'shipping',
    key: 'shipping',
  },
  {
    label: 'insurance',
    key: 'insurance',
  },
  {
    label: 'taxes & fees',
    key: 'taxes',
  },
];

const OrderCard = ({ data }) => {
  const renderItems = items =>
    items.map(item => {
      const { title, img, amount, price } = item;
      return (
        <div className={css.item} key={title + img}>
          <div
            className={css.itemImg}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className={css.itemText}>
            <div className={css.itemTitle}>{title}</div>
            <div className={css.itemPrice}>
              {amount} x ${price}
            </div>
          </div>
        </div>
      );
    });

  const renderFullPrices = () => (
    <>
      {fullPricesList.map(({ key, label }) => (
        <div className={css.fullPrices} key={key}>
          <span className={css.fullPricesTitle}>{label}</span>
          <span className={css.fullPricesText}>${data[key]}</span>
        </div>
      ))}
      <div className={css.totalWrapper}>
        <span className={css.totalTitle}>Total</span>
        <span className={css.totalText}>${splitNumWithComa(data.total)}</span>
      </div>
    </>
  );

  return (
    <div className={css.card}>
      {renderItems(data.items)}
      <div className={css.line}></div>
      {renderFullPrices()}
    </div>
  );
};

OrderCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OrderCard;
