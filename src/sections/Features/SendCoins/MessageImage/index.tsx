import React from 'react';
import Image from 'next/image';
import botAvatar from 'assets/images/botAvatar.svg';
import styles from './styles.module.css';

interface MessageImageProps {
  cryptoValue: number
  currencyValue: number
  numberTransaction: number
}

function MessageImage({
  cryptoValue,
  currencyValue,
  numberTransaction,
}: MessageImageProps) {
  return (
    <div className={styles.root}>
      <Image
        className={styles.avatar}
        src={botAvatar}
        alt="Crypto Bot"
      />

      <div>
        <div className={styles.head}>
          <p><b>Crypto Bot</b></p>
          <p className={styles.date}>now</p>
        </div>

        <div>
          <p>
            💸 You received
            {' '}
            {cryptoValue}
            {' '}
            TON ($
            {currencyValue}
            ) from @CryptoBot #
            {numberTransaction}
          </p>
          <br />
          <p>💬 Design contest awards 🏆</p>
        </div>
      </div>
    </div>
  );
}

export default MessageImage;
