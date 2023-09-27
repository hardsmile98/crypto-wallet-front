import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

interface ButtonLinkProps {
  type?: 'default' | 'secondary' | 'outlined'
  href: string
  children: React.ReactNode
}

const stylesMap = {
  default: styles.default,
  secondary: styles.secondary,
  outlined: styles.outlined,
};

function ButtonLink({
  type = 'default',
  href,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${styles.link} ${stylesMap[type]}`}>
      {children}
    </Link>
  );
}

export default ButtonLink;
