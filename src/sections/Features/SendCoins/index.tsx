import React from 'react';
import Image from './Image';
import MessageImage from './MessageImage';
import styles from './styles.module.css';

function SendCoins() {
  return (
    <>
      <div className={styles.imageWrap}>
        <Image />

        <div className={styles.messages}>
          <MessageImage />
        </div>
      </div>

      <div>
        <h3>
          Send coins to users
        </h3>

        <p>
          {'Automate payouts to users with '}
          <span>transfer</span>
          {' API method'}
        </p>
      </div>
    </>
  );
}

export default SendCoins;
