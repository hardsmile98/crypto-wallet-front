import React from 'react';
import sendCoinsImage from 'assets/images/send_coins.webp';
import Image from 'next/image';
import styles from './styles.module.css';

function SendCoins() {
  return (
    <>
      <div className={styles.imageWrap}>
        <Image
          src={sendCoinsImage}
          alt="sendCoins"
        />
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
