/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Container from '@components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './styles.module.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

function UseCases() {
  return (
    <section
      id="usecases"
      className={styles.root}
    >
      <Container>
        <div className={styles.sliderWrap}>
          <Swiper
            centeredSlides
            modules={[EffectFade]}
            loop
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
            11231
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UseCases;
