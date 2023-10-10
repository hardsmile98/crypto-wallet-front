import React from 'react';
import ButtonLink from '@components/ButtonLink';
import { hrefs } from 'contants';
import MessageImage from './MessageImage';
import styles from '../styles.module.css';

function Slide3() {
  return (
    <div className={styles.slide}>
      <div className={`${styles.slideImage} ${styles.image3}`}>
        <div className={styles.wrap}>
          <div className={styles.messageWrap}>
            <MessageImage />
          </div>
        </div>
      </div>

      <div className={styles.slideText}>
        <h2>
          <span>
            Endless customization:
          </span>
          {' with Webhooks'}
        </h2>

        <p>
          Receive successful payment notifications in real-time.
          Integrate to any scenario of your service.
        </p>

        <ButtonLink href={hrefs.apiDocs}>
          Open API Docs
        </ButtonLink>
      </div>
    </div>
  );
}

export default Slide3;
