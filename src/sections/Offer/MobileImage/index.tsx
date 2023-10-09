import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import mobile from 'assets/images/mobile.webp';
import mobileDark from 'assets/images/mobile_dark.webp';
import Image from 'next/image';
import styles from '../styles.module.css';

function MobileImage() {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.mobileEmpty} />;
  }

  return (
    <Image
      priority
      className={styles.mobile}
      src={theme === 'light' ? mobile : mobileDark}
      alt="mobile"
    />
  );
}

export default MobileImage;
