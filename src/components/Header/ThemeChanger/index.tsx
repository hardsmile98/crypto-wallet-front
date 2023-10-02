import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import lightIcon from 'assets/images/light.svg';
import darkIcon from 'assets/images/dark.svg';
import Image from 'next/image';
import styles from './styles.module.css';

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      type="button"
      onClick={changeTheme}
      className={styles.root}
    >
      <Image
        src={theme === 'light' ? darkIcon : lightIcon}
        alt="theme"
      />
    </button>
  );
}

export default ThemeChanger;
