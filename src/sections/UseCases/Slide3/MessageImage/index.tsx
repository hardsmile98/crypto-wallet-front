import React from 'react';
import arrowBottom from '@assets/images/arrow_bottom.svg';
import { Message, CodeExample } from '@components/index';
import Image from 'next/image';
import styles from './styles.module.css';

function MessageImage() {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <Message date="22:10" withButton>
          <p>
            💸 You sent 3,99 USDT ($3.99).
          </p>
          <br />
          <p>
            <b>Recipient:</b>
            {' '}
            <span>
              @StoresBot
            </span>
          </p>
          <br />
          <p>
            🧾 One month of Premium access 🌟
          </p>
        </Message>

        <Image
          className={styles.icon}
          src={arrowBottom}
          alt="arrow"
        />
      </div>

      <CodeExample />
    </div>
  );
}

export default MessageImage;
