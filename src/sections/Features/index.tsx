import React from 'react';
import Container from '@components/Container';
import Cryptocurrencies from './Cryptocurrencies';
import CreateApp from './CreateApp';
import styles from './styles.module.css';

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
                <CreateApp />
              </div>

              <div className={styles.wrap}>
                Real-time exchange rates
              </div>
            </div>

            <div className={styles.wrap}>
              Payment statistics
            </div>
          </div>

          <div className={styles.widgetsWrap}>
            <div className={styles.wrap}>
              Send coins to users
            </div>

            <div className={styles.widgets}>
              <div className={styles.wrap}>
                Anonymous payments
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;
