import React from 'react';
import Message from './Message';
import styles from './styles.module.css';

function Anonymous() {
  return (
    <div className={styles.root}>
      <div className={styles.messageWrap}>
        <Message />
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
