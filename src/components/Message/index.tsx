import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface MessageProps {
  children: ReactNode
  date: string
  withButton?: boolean
  withBalloon?: boolean
}

function Message({
  children,
  date,
  withButton,
  withBalloon,
}: MessageProps) {
  return (
    <div className={`
        ${styles.root}
        ${withBalloon ? styles.withBalloon : ''} 
        ${withButton ? styles.withButton : ''}`}
    >
      <div>
        {children}
      </div>

      <p className={styles.date}>
        {date}
      </p>
    </div>
  );
}

export default Message;
