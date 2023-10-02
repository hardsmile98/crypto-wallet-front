import React from 'react';
import eth from '@assets/images/currencies/ETH.svg';
import usdt from '@assets/images/currencies/USDT.svg';
import ton from '@assets/images/currencies/TON.svg';
import btc from '@assets/images/currencies/BTC.svg';
import trx from '@assets/images/currencies/TRX.svg';
import ltc from '@assets/images/currencies/LTC.svg';
import usdc from '@assets/images/currencies/USDC.svg';
import bnb from '@assets/images/currencies/BNB.svg';
import Image from 'next/image';
import styles from './styles.module.css';

const currencies = [
  {
    id: 1,
    image: eth,
    label: 'ETH',
  },
  {
    id: 2,
    image: usdt,
    label: 'USDT',
  },
  {
    id: 3,
    image: ton,
    label: 'TON',
  },
  {
    id: 4,
    image: btc,
    label: 'BTC',
  },
  {
    id: 5,
    image: trx,
    label: 'TRX',
  },
  {
    id: 6,
    image: ltc,
    label: 'LTC',
  },
  {
    id: 7,
    image: usdc,
    label: 'USDC',
  },
  {
    id: 8,
    image: bnb,
    label: 'BNB',
  },
];

function Cryptocurrencies() {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h3>
          Accept a wide range of cryptocurrencies
        </h3>

        <p>
          {'Bill any supported cryptocurrencies with asset parameter in '}
          <span>GetInvoice</span>
          {' method'}
        </p>
      </div>

      <ul className={styles.currencies}>
        {currencies.map((currency) => (
          <li key={currency.id}>
            <Image
              width={96}
              height={96}
              src={currency.image}
              alt={currency.label}
            />

            <p>
              {currency.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cryptocurrencies;
