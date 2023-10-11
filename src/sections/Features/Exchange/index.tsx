import React from 'react';
import Image from 'next/image';
import { SwapIcon } from '@components/index';
import exchange from 'assets/images/currencies/EXCHANGE.svg';
import USDT from 'assets/images/currencies/USDT.svg';
import BTC from 'assets/images/currencies/BTC.svg';
import TON from 'assets/images/currencies/TON.svg';
import styles from './styles.module.css';

function Exchange() {
  return (
    <>
      <div className={styles.exchange}>
        <div className={styles.coins}>
          <Image src={USDT} alt="USDT" />
          <Image src={BTC} alt="BTC" />
          <Image src={TON} alt="TON" />
        </div>

        <div className={styles.swap}>
          <SwapIcon />
        </div>

        <Image
          className={styles.exchangeImage}
          src={exchange}
          alt="exchange"
        />
      </div>

      <div>
        <h3>
          Real-time exchange rates
        </h3>

        <p>
          {'Request up to date currency rate with the '}
          <span>getExchangeRates</span>
          {' API method'}
        </p>
      </div>
    </>
  );
}

export default Exchange;
