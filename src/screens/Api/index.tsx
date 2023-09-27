import Container from '@components/Container';
import React from 'react';
import ButtonLink from '@components/ButtonLink';
import styles from './styles.module.css';

function Api() {
  return (
    <section
      id="api"
      className={styles.root}
    >
      <Container>
        <div className={styles.wrap}>
          <div>
            <h2>
              Crypto Pay API
            </h2>

            <p>
              Explore available methods and types and integrate them in any programming language.
            </p>

            <ButtonLink href="#" type="outlined">
              Open API Docs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Api;
