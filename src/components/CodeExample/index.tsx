import React from 'react';
import styles from './styles.module.css';

interface CodeExampleProps {
  className?: string
}

function CodeExample({ className }: CodeExampleProps) {
  return (
    <div className={`${styles.code} ${className || ''}`}>
      <p>
        <span className={styles.codeBlue}>
          Invoice
        </span>
        (
      </p>
      <p className={styles.lineWithPadding}>
        <span className={styles.codeBlue}>
          payload:
        </span>
        {' "item:monthly_premium",'}
      </p>
      <p className={styles.lineWithPadding}>
        <span className={styles.codeBlue}>
          status:
        </span>
        {' "paid",'}
      </p>
      <p className={styles.lineWithPadding}>
        <span className={styles.codeBlue}>
          amount:
        </span>
        {' "3.99",'}
      </p>
      <p className={styles.lineWithPadding}>
        <span className={styles.codeBlue}>
          asset:
        </span>
        {' "USDT",'}
      </p>
      <p>
        )
      </p>
    </div>
  );
}

export default CodeExample;
