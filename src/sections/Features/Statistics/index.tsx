import React from 'react';
import { Link } from '@components/index';
import { hrefs } from 'contants';
import Message from './Message';
import styles from './styles.module.css';

function Statistics() {
  return (
    <div className={styles.root}>
      <div className={styles.messageWrap}>
        <Message />
      </div>

      <div>
        <h3>
          Payment statistics
        </h3>

        <p>
          {'Open '}
          <Link href={hrefs.bot}>
            @CryptoBot
          </Link>
          {', go to '}
          <span>Crypto Pay</span>
          {' and '}
          <span>My Apps</span>
          , App Name to get Statistics
        </p>
      </div>
    </div>
  );
}

export default Statistics;
