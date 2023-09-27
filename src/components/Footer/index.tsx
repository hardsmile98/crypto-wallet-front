import React from 'react';
import { menuLiks } from 'contants';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/images/logo.svg';
import ButtonLink from '../ButtonLink';
import Container from '../Container';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer
      id="footer"
      className={styles.footer}
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
            href="#"
            type="outlined"
          >
            Get started
          </ButtonLink>
        </div>

        <p className={styles.copy}>
          {`©${new Date().getFullYear()} Crypto Bot`}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
