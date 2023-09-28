import React from 'react';
import Container from '@components/Container';
import styles from './styles.module.css';

function QuickStart() {
  return (
    <section
      id="howtostart"
      className={styles.root}
    >
      <Container>
        <h2 className={styles.head}>
          {'Quick start using '}
          <span>Crypto Pay</span>
        </h2>
      </Container>
    </section>
  );
}

export default QuickStart;
