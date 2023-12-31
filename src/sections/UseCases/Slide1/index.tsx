import React from 'react';
import { ButtonLink } from '@components/index';
import { hrefs } from 'contants';
import styles from '../styles.module.css';
import MessageImage from './MessageImage';

function Slide1() {
  return (
    <div className={styles.slide}>
      <div className={`${styles.slideImage} ${styles.image1}`}>
        <div className={styles.wrap}>
          <div className={styles.messageWrap}>
            <MessageImage />
          </div>
        </div>
      </div>

      <div className={styles.slideText}>
        <h2>
          <span>
            Instant Auto Sales:
          </span>
          {' Boost conversion'}
        </h2>

        <p>
          Immediately deliver digital products and services to your users.
        </p>

        <ButtonLink href={hrefs.apiDocs}>
          Open API Docs
        </ButtonLink>
      </div>
    </div>
  );
}

export default Slide1;
