import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import image from 'assets/images/send_coins.webp';
import darkImage from 'assets/images/send_coins_dark.webp';
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
      src={theme === 'light' ? image : darkImage}
      alt="sendCoins"
    />
  );
}

export default MobileImage;
