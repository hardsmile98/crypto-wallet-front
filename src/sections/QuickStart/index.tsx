import React from 'react';
import warning from 'assets/images/emoticons/warning.svg';
import {
  Link,
  Container,
  Message,
  CodeExample,
} from '@components/index';
import { hrefs } from 'contants';
import Image from 'next/image';
import styles from './styles.module.css';

function QuickStart() {
  return (
    <section
      id="howtostart"
      className={styles.root}
    >
      <Container>
        <h2 className={styles.title}>
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

                <ul className={styles.stepList}>
                  <li>
                    {'1. Open '}
                    <Link href={hrefs.bot}>
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
                <Message date="21:30" withButton>
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
                    <Image
                      src={warning}
                      alt="warnig"
                    />
                    {` This token can be used by anyone to control your app.
                      Keep and store it safely.`}
                  </p>
                </Message>

                <div className={styles.messageButton}>
                  Revoke Token
                </div>
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={`${styles.stepExample} ${styles.example2}`}>
              <div className={styles.code}>
                <p>
                  asset
                  <span className={styles.codeBlue}>
                    =
                  </span>
                  <span className={styles.codeYellow}>
                    TON
                  </span>
                  <span className={styles.codeRed}>
                    &
                  </span>
                  amount
                  <span className={styles.codeBlue}>
                    =
                  </span>
                  <span className={styles.codeYellow}>
                    2.75
                  </span>
                </p>
                <p>
                  {'{"asset":'}
                  <span className={styles.codeBlue}>
                    "TON"
                  </span>
                  , "amount":
                  <span className={styles.codeBlue}>
                    "2.75"
                  </span>
                  {'}'}
                </p>
              </div>
            </div>

            <div className={`${styles.stepText} ${styles.rigthBlock}`}>
              <h3 className={styles.stepNumber}>
                2
              </h3>

              <div>
                <h3 className={styles.stepTitle}>
                  Crypto Pay API Request
                </h3>

                <div className={styles.stepDescription}>
                  <p>
                    Requests are only served over HTTPS
                  </p>
                  <p>
                    To pass parameters use:
                  </p>
                </div>

                <ul className={`${styles.stepList} ${styles.list}`}>
                  <li>
                    <span>
                      URL query string
                    </span>
                  </li>
                  <li>
                    <span>
                      application/json
                    </span>
                  </li>
                  <li>
                    <span>
                      application/x-www-form-urlencoded
                    </span>
                  </li>
                  <li>
                    <span>
                      multipart/form-data
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepText}>
              <h3 className={styles.stepNumber}>
                3
              </h3>

              <div>
                <h3 className={styles.stepTitle}>
                  Getting updates
                </h3>

                <div className={styles.stepDescription}>
                  <p>
                    There are two ways of receiving updates for your app:
                  </p>
                </div>

                <ul className={`${styles.stepList} ${styles.list}`}>
                  <li>
                    <span>
                      getInvoices
                    </span>
                    {' method to get a list of created invoices.'}
                  </li>
                  <li>
                    <span>
                      Webhooks
                    </span>
                    {' to receive updates in realtime.'}
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${styles.stepExample} ${styles.example3}`}>
              <CodeExample />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default QuickStart;
