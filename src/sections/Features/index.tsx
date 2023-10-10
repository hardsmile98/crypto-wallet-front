import React from 'react';
import { Container } from '@components/index';
import Cryptocurrencies from './Cryptocurrencies';
import OneClick from './OneClick';
import Exchange from './Exchange';
import SendCoins from './SendCoins';
import styles from './styles.module.css';
import Statistics from './Statistics';
import Anonymous from './Anonymous';

function Features() {
  return (
    <section id="features">
      <Container>
        <div className={styles.root}>
          <div className={styles.wrap}>
            <Cryptocurrencies />
          </div>

          <div className={styles.widgetsWrap}>
            <div className={styles.widgets}>
              <div className={styles.wrap}>
                <OneClick />
              </div>

              <div className={styles.wrap}>
                <Exchange />
              </div>
            </div>

            <div className={styles.wrap}>
              <Statistics />
            </div>
          </div>

          <div className={styles.widgetsWrap}>
            <div className={styles.wrap}>
              <SendCoins />
            </div>

            <div className={styles.widgets}>
              <div className={styles.wrap}>
                <Anonymous />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;
