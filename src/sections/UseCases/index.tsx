/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useState } from 'react';
import Container from '@components/Container';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './styles.module.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

function UseCases() {
  const sliderRef = useRef<null | SwiperRef>(null);

  const [countSlides, setCountSlides] = useState<null | number>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigation = Array(countSlides).fill(0);

  return (
    <section
      id="usecases"
      className={styles.root}
    >
      <Container>
        <div className={styles.sliderWrap}>
          <Swiper
            ref={sliderRef}
            onSwiper={(swiper) => {
              setCountSlides(swiper.slides.length);
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex);
            }}
            centeredSlides
            modules={[Autoplay, EffectFade]}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            <SwiperSlide>
              <Slide1 />
            </SwiperSlide>
            <SwiperSlide>
              <Slide2 />
            </SwiperSlide>
            <SwiperSlide>
              <Slide3 />
            </SwiperSlide>
          </Swiper>

          <div className={styles.navigation}>
            <span className={styles.counter}>
              01
            </span>

            <ul className={styles.bullets}>
              {navigation.map((_, index) => (
                <li key={index}>
                  <button
                    type="button"
                    aria-label={`Slide-${index}`}
                    className={`${currentSlide === index ? styles.active : ''}`}
                    onClick={() => {
                      sliderRef.current?.swiper.slideToLoop(index);
                    }}
                  />
                </li>
              ))}
            </ul>

            <span className={styles.counter}>
              {`0${countSlides}`}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UseCases;
