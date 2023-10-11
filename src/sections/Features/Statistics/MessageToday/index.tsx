import React from 'react';
import { Message } from '@components/index';
import styles from '../styles.module.css';

function MessageToday() {
  return (
    <div>
      <Message date="21:55" withButton>
        <p>
          {'Application Statistics '}
          <b>@GoodsBot</b>
          {' for '}
          <b>today:</b>
        </p>
        <br />
        <p>
          {'Volume: '}
          <b>$1,660</b>
        </p>
        <br />
        <p>
          {'The number of created invoices: '}
          <b>1,757</b>
        </p>
        <p>
          {'Number of payments: '}
          <b>2,327</b>
        </p>
        <p>
          {'Number of users: '}
          <b>1,267</b>
        </p>
        <br />
        <p>
          {'Conversion: '}
          <b>53%</b>
        </p>
      </Message>

      <div className={styles.buttons}>
        <div className={styles.buttonSmall}>
          All Time
        </div>
        <div className={`${styles.buttonSmall} ${styles.selectButton}`}>
          · Today ·
        </div>
        <div className={styles.buttonSmall}>
          Yesterday
        </div>
        <div className={styles.buttonSmall}>
          Week
        </div>
        <div>
          Month
        </div>
        <div className={styles.buttonLast}>
          ‹ Back
        </div>
      </div>
    </div>
  );
}

export default MessageToday;
