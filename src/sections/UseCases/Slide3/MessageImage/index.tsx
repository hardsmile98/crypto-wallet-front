import React from 'react';
import Message from '@components/Message';
import styles from './styles.module.css';

function MessageImage() {
  return (
    <div className={styles.root}>
      <Message date="21:25">
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
    </div>
  );
}

export default MessageImage;
