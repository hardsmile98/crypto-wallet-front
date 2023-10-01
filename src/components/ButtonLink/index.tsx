import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

interface ButtonLinkProps {
  type?: 'default' | 'secondary' | 'outlined'
  className?: string
  href: string
  target?: '_blank' | '_self'
  children: React.ReactNode
}

const stylesMap = {
  default: styles.default,
  secondary: styles.secondary,
  outlined: styles.outlined,
};

function ButtonLink({
  type = 'default',
  className,
  href,
  target = '_blank',
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`${styles.link} ${stylesMap[type]} ${className}`}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
