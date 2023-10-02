import React from 'react';
import lightIcon from 'assets/images/light.svg';
import darkIcon from 'assets/images/dark.svg';
import Image from 'next/image';
import styles from './styles.module.css';

function ThemeChanger() {
  const theme = 'light';
  const setTheme = (theme) => {};

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      type="button"
      onClick={changeTheme}
      className={styles.root}
    >
      <Image
        src={theme === 'light' ? darkIcon : lightIcon}
        alt={theme}
      />
    </button>
  );
}

export default ThemeChanger;
