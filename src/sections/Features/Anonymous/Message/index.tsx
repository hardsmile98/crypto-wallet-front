import React from 'react';
import styles from './styles.module.css';

function Message() {
  return (
    <div className={styles.root}>
      <div>
        <p>
          🏝️
          <b>Anonymous</b>
          {' paid your invoice #IV53.You received '}
          <b>3442 TON ($5000).</b>
        </p>
        <br />
        <p>
          💬 A generous donation! Keep working hard&nbsp;💪
        </p>
      </div>

      <p className={styles.date}>
        21:25
      </p>
    </div>
  );
}

export default Message;
