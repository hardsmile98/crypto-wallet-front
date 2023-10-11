import React from 'react';
import { Message } from '@components/index';

interface MessageImageProps {
  cryptoValue: number
  currencyValue: number
  numberTransaction: number
  date: string
}

function MessageImage({
  cryptoValue,
  currencyValue,
  numberTransaction,
  date,
}: MessageImageProps) {
  return (
    <Message date={date} withBalloon>
      <p>
        🏝️
        <b>Anonymous</b>
        {` paid your invoice #IV${numberTransaction}.You received `}
        <b>
          {cryptoValue}
          {' '}
          TON ($
          {currencyValue}
          ).
        </b>
      </p>
      <br />
      <p>
        💬 A generous donation! Keep working hard&nbsp;💪
      </p>
    </Message>
  );
}

export default MessageImage;
