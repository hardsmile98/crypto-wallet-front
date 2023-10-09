import { Link } from '@components/index';
import { hrefs } from 'contants';
import React from 'react';

function Statistics() {
  return (
    <div>

      <div>
        <h3>
          Payment statistics
        </h3>

        <p>
          {'Open '}
          <Link href={hrefs.bot}>
            @CryptoBot
          </Link>
          {', go to '}
          <span>Crypto Pay</span>
          {' and '}
          <span>My Apps</span>
          , App Name to get Statistics
        </p>
      </div>
    </div>
  );
}

export default Statistics;
