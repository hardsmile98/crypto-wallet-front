import React from 'react';
import mobile from 'assets/images/mobile.webp';
import Container from '@components/Container';
import ButtonLink from '@components/ButtonLink';
import Image from 'next/image';
import styles from './styles.module.css';

function Offer() {
  return (
    <section
      id="offer"
      className={styles.root}
    >
      <Container>
        <div className={styles.wrap}>
          <div>
            <div className={styles.content}>
              <h1 className={styles.title}>
                {'Crypto payments for '}
                <span>telegram bots</span>
              </h1>

              <p className={styles.description}>
                Seamlessly accept crypto payments in your Telegram bots and services.
              </p>

              <ButtonLink href="#">
                Get started
              </ButtonLink>
            </div>

            <div>
              <p>
                Popular bots use Crypto Pay
              </p>
            </div>
          </div>

          <Image
            priority
            className={styles.mobile}
            src={mobile}
            alt="mobile"
          />
        </div>
      </Container>
    </section>
  );
}

export default Offer;
