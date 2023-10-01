import React from 'react';
import mobile from 'assets/images/mobile.webp';
import Container from '@components/Container';
import ButtonLink from '@components/ButtonLink';
import Image from 'next/image';
import { hrefs } from 'contants';
import badge1 from '@assets/images/badges/1.webp';
import badge2 from '@assets/images/badges/2.webp';
import badge3 from '@assets/images/badges/3.webp';
import badge4 from '@assets/images/badges/4.webp';
import badge5 from '@assets/images/badges/5.webp';
import styles from './styles.module.css';

const badges = [
  {
    id: 1,
    image: badge1,
  },
  {
    id: 2,
    image: badge2,
  },
  {
    id: 3,
    image: badge3,
  },
  {
    id: 4,
    image: badge4,
  },
  {
    id: 5,
    image: badge5,
  },
];

function Offer() {
  return (
    <section
      id="offer"
      className={styles.root}
    >
      <Container>
        <div className={styles.wrap}>
          <div className={styles.offer}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                {'Crypto payments for '}
                <span>telegram bots</span>
              </h1>

              <p className={styles.description}>
                Seamlessly accept crypto payments in your Telegram bots and services.
              </p>

              <ButtonLink href={hrefs.bot}>
                Get started
              </ButtonLink>
            </div>

            <div>
              <div className={styles.badges}>
                {badges.map((badge, idx) => (
                  <Image
                    className={idx !== 0 ? styles.badge : undefined}
                    key={badge.id}
                    priority
                    src={badge.image}
                    alt="bot"
                  />
                ))}
              </div>

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
