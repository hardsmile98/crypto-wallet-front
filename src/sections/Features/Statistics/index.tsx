import React from 'react';
import { Link } from '@components/index';
import { hrefs } from 'contants';
import MessageAllTime from './MessageAllTime';
import styles from './styles.module.css';
import MessageToday from './MessageToday';

function Statistics() {
  return (
    <div className={styles.root}>
      <div className={styles.messageWrap}>
        <div className={styles.wrap}>
          <MessageToday />

          <MessageAllTime />
        </div>
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
