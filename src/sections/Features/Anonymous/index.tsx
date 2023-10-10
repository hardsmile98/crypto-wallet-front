import React from 'react';
import MessageImage from './MessageImage';
import styles from './styles.module.css';

function Anonymous() {
  return (
    <div className={styles.root}>
      <div className={styles.messageWrap}>
        <MessageImage />
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
