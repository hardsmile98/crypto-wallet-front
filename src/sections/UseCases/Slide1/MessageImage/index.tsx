import React from 'react';
import Message from '@components/Message';
import styles from './styles.module.css';

function MessageImage() {
  return (
    <div className={styles.root}>
      <Message date="21:25">
        <p>
          💸 You sent 5,5 USDT ($5.50).
        </p>
        <br />
        <p>
          <b>Recipient:</b>
          {' GoodsBot'}
        </p>
        <br />
        <p>
          🧾 1 month of Blazing Fast VPN ⚡
        </p>
      </Message>

      <Message date="21:25">
        <p>
          🔑 Access key: VPN-X3Y7-Z1W9-R6T2-Q4V8
        </p>
      </Message>
    </div>
  );
}

export default MessageImage;
