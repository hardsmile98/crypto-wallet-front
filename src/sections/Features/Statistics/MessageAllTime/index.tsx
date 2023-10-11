import React from 'react';
import { Message } from '@components/index';
import styles from '../styles.module.css';

function MessageAllTime() {
  return (
    <div>
      <Message date="21:30" withButton>
        <p>
          {'Application Statistics '}
          <b>@GoodsBot</b>
          {' for '}
          <b>all time:</b>
        </p>
        <br />
        <p>
          {'Volume: '}
          <b>$6,530</b>
        </p>
        <br />
        <p>
          {'The number of created invoices: '}
          <b>15,569</b>
        </p>
        <p>
          {'Number of payments: '}
          <b>6,453</b>
        </p>
        <p>
          {'Number of users: '}
          <b>5,606</b>
        </p>
        <br />
        <p>
          {'Conversion: '}
          <b>41%</b>
        </p>
      </Message>

      <div className={styles.buttons}>
        <div className={`${styles.buttonSmall} ${styles.selectButton}`}>
          · All Time ·
        </div>
        <div className={styles.buttonSmall}>
          Today
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

export default MessageAllTime;
