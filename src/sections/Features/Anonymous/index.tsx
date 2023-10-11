import React from 'react';
import MessageImage from './MessageImage';
import styles from './styles.module.css';

function Anonymous() {
  return (
    <div className={styles.root}>
      <div className={styles.messageWrap}>
        <div className={styles.wrap}>
          <MessageImage
            cryptoValue={3442}
            currencyValue={5000}
            numberTransaction={52}
            date="21:25"
          />
          <MessageImage
            cryptoValue={3862}
            currencyValue={6500}
            numberTransaction={80}
            date="21:30"
          />
        </div>
      </div>

      <div>
        <h3>
          Anonymous payments
        </h3>

        <p>
          {'Use '}
          <b>allow_anonymous</b>
          {' parameterin '}
          <span>createInvoice</span>
          {' method to give useran option to remain private'}
        </p>
      </div>
    </div>
  );
}

export default Anonymous;
