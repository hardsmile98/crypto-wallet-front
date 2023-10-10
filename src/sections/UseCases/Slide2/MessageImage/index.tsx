import React from 'react';
import { Message } from '@components/index';
import arrowLink from 'assets/images/arrow_link.svg';
import Image from 'next/image';
import styles from './styles.module.css';

function MessageImage() {
  return (
    <div className={styles.root}>
      <Message date="21:30" withButton>
        <p>
          💸 You sent 3,5 TON ($5.08).
        </p>
        <br />
        <p>
          <b>Recipient:</b>
          {' GoodsBot'}
        </p>
        <br />
        <p>
          🧾 Exclusive access to the channel 😻
        </p>
      </Message>

      <div className={styles.button}>
        View Channel
        <Image
          width={10}
          height={10}
          className={styles.icon}
          src={arrowLink}
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default MessageImage;
