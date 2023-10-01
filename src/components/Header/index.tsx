import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/images/logo.svg';
import { hrefToBot, menuLiks } from 'contants';
import ButtonLink from '../ButtonLink';
import Container from '../Container';
import styles from './styles.module.css';

function Header() {
  return (
    <header
      id="header"
      className={styles.header}
    >
      <Container>
        <div className={styles.wrap}>
          <Link href="/">
            <Image
              className={styles.logo}
              src={logo}
              alt="logo"
            />
          </Link>

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

          <ButtonLink
            href={hrefToBot}
            type="secondary"
          >
            Get started
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

export default Header;
