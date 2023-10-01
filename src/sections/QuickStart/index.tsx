import React from 'react';
import Container from '@components/Container';
import Link from '@components/Link';
import { hrefToBot } from 'contants';
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

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepText}>
              <h3 className={styles.stepNumber}>
                1
              </h3>

              <div>
                <h3 className={styles.stepTitle}>
                  Authorizing your app
                </h3>

                <ul className={styles.stepContent}>
                  <li>
                    {'1. Open '}
                    <Link href={hrefToBot}>
                      @CryptoBot
                    </Link>
                  </li>
                  <li>
                    {'2. Go to '}
                    <span>
                      Crypto Pay
                    </span>
                  </li>
                  <li>
                    {'3. Tap '}
                    <span>
                      Create App
                    </span>
                  </li>
                  <li>
                    {'4. Get '}
                    <span>
                      API Token
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${styles.stepExample} ${styles.example1}`}>
              <div className={styles.message}>
                <div className={styles.messageText}>
                  <div className={styles.messageContent}>
                    <p>
                      {'Here is the token for the app '}
                      <span>@GoodsBot</span>
                    </p>
                    <br />
                    <p>
                      114935:AA9xMcRqHYZYl6CQlkhBStMAwTFQ1s6iJHM
                    </p>
                    <br />
                    <p>
                      This token can be used by anyone to control your app.
                      Keep and store it safely.
                    </p>
                  </div>

                  <p className={styles.date}>
                    21:30
                  </p>
                </div>

                <div className={styles.messageButton}>
                  Revoke Token
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default QuickStart;
