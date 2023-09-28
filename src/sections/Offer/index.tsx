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
        <div>
          <div>
            <h1>
              {'Crypto payments for '}
              <span>telegram bots</span>
            </h1>

            <p>
              Seamlessly accept crypto payments in your Telegram bots and services.
            </p>

            <ButtonLink href="#">
              Get started
            </ButtonLink>
          </div>

          <Image src={mobile} alt="mobile" />
        </div>
      </Container>
    </section>
  );
}

export default Offer;
