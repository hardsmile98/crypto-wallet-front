import React from 'react';
import ButtonLink from '@components/ButtonLink';
import { hrefs } from 'contants';
import MessageImage from './MessageImage';
import styles from '../styles.module.css';

function Slide2() {
  return (
    <div className={styles.slide}>
      <div className={`${styles.slideImage} ${styles.image2}`}>
        <div className={styles.wrap}>
          <div className={styles.messageWrap}>
            <MessageImage />
          </div>
        </div>
      </div>

      <div className={styles.slideText}>
        <h2>
          <span>
            Channels integration:
          </span>
          {' Seamless access'}
        </h2>

        <p>
          Automatically unlock exclusive content to your users.
        </p>

        <ButtonLink href={hrefs.apiDocs}>
          Open API Docs
        </ButtonLink>
      </div>
    </div>
  );
}

export default Slide2;
