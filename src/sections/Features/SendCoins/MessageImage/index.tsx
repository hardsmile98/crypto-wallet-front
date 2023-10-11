import React from 'react';
import Image from 'next/image';
import botAvatar from 'assets/images/botAvatar.svg';
import styles from './styles.module.css';

function MessageImage() {
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
          <p>💸 You received 3448 TON ($5000) from @CryptoBot #A777</p>
          <br />
          <p>💬 Design contest awards 🏆</p>
        </div>
      </div>
    </div>
  );
}

export default MessageImage;
