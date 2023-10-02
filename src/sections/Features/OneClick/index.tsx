import React from 'react';
import Image from 'next/image';
import cursor from 'assets/images/cursor.svg';
import { Link } from '@components/index';
import { hrefs } from 'contants';
import styles from './styles.module.css';

function OneClick() {
  return (
    <>
      <div className={styles.buttonWrap}>
        <div className={styles.button}>
          🏝️ Create App

          <Image
            className={styles.cursor}
            alt="cursor"
            src={cursor}
          />
        </div>
      </div>

      <div>
        <h3>
          One click to start
        </h3>

        <p>
          {'Open '}
          <Link href={hrefs.bot}>
            @CryptoBot
          </Link>
          {', go to '}
          <span>Crypto Pay</span>
          {'  and tap Create App to get API Token'}
        </p>
      </div>
    </>
  );
}

export default OneClick;
