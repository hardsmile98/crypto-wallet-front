import React from 'react';
import Image from 'next/image';
import Container from '@components/Container';
import ButtonLink from '@components/ButtonLink';
import js from 'assets/images/stacks/js.svg';
import net from 'assets/images/stacks/net.svg';
import php from 'assets/images/stacks/php.svg';
import python from 'assets/images/stacks/python.svg';
import go from 'assets/images/stacks/go.svg';
import styles from './styles.module.css';

const stacks = [
  {
    id: 1,
    img: js,
    title: 'crypto-pay-api',
  },
  {
    id: 2,
    img: net,
    title: 'CryptoPay',
  },
  {
    id: 3,
    img: php,
    title: 'crypto-pay-api',
  },
  {
    id: 4,
    img: python,
    title: 'aiocryptopay',
  },
  {
    id: 5,
    img: go,
    title: 'cryptobot-sdk-golang',
  },
];

function Community() {
  return (
    <section
      id="community"
      className={styles.root}
    >
      <Container>
        <div className={styles.wrap}>
          <h2>
            Join dev community
          </h2>

          <p className={styles.description}>
            Connect with bot developers and explore the
            possibilities our crypto payments service unlocks.
          </p>

          <div className={styles.stacks}>
            {stacks.map((stack) => (
              <div
                className={styles.stack}
                key={stack.id}
              >
                <Image
                  src={stack.img}
                  alt={stack.title}
                />

                <p>
                  {stack.title}
                </p>
              </div>
            ))}
          </div>

          <ButtonLink href="#">
            Open Devs chat
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export default Community;
