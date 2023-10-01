import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

interface LinkProps {
  children: React.ReactNode
  href: string
}

function CustomLink({ children, href }: LinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}

export default CustomLink;
