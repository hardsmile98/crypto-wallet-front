import React from 'react';
import { Message } from '@components/index';

function MessageImage() {
  return (
    <Message date="21:25" withBalloon>
      <p>
        🏝️
        <b>Anonymous</b>
        {' paid your invoice #IV53.You received '}
        <b>3442 TON ($5000).</b>
      </p>
      <br />
      <p>
        💬 A generous donation! Keep working hard&nbsp;💪
      </p>
    </Message>
  );
}

export default MessageImage;
