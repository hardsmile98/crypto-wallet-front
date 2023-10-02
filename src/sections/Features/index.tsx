import React from 'react';
import Container from '@components/Container';
import Cryptocurrencies from './Cryptocurrencies';
import styles from './styles.module.css';

function Features() {
  return (
    <section id="features">
      <Container>
        <div className={styles.wrap}>
          <Cryptocurrencies />
        </div>
      </Container>
    </section>
  );
}

export default Features;
