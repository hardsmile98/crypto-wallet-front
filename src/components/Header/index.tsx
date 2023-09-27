import React from 'react';
import Link from 'next/link';
import Container from '../Container';
import styles from './styles.module.css';

const menuLiks = [
  {
    title: 'Use cases',
    href: '#usecase',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'How to start',
    href: '#howtostart',
  },
];

function Header() {
  return (
    <header
      id="header"
      className={styles.header}
    >
      <Container>
        <div className={styles.wrap}>
          <div>
            logo
          </div>

          <nav className={styles.menu}>
            <ul>
              {menuLiks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
