import React from 'react';
import { useTheme } from 'next-themes';
import lightIcon from 'assets/images/light.svg';
import darkIcon from 'assets/images/dark.svg';
import Image from 'next/image';
import styles from './styles.module.css';

function ThemeChanger() {
  const {
    theme = 'light',
    setTheme,
  } = useTheme();

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
