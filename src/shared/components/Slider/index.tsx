import { useStyles } from 'pages/home-page/components/testimonials/styles';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ISliderModel {
  array: {
    key: number;
    name: string;
    testimonial: string;
    email: string;
    logo: string;
  }[];
}

const Slider: React.FC<ISliderModel> = ({ array }) => {
  const [swiper, setSwiper] = React.useState<any>();
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        slidesPerView={1}
        navigation
        onSwiper={(s) => setSwiper(s)}
      >
        {array.map(({ name, testimonial, key, email, logo }) => {
          return (
            <SwiperSlide key={key}>
              <div key={key} className={classes.authorBlock}>
                <div className={classes.wrapperItem}>
                  <div className={classes.mobName}>{name}</div>
                  <img src={logo} alt="logo" className={classes.logo} />
                  <div>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.testimonial}>{testimonial}</div>
                    <div className={classes.nickName}>{email}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={classes.arrowWrapper}>
        <div onClick={() => swiper.slidePrev()} />
        <div onClick={() => swiper.slideNext()} />
      </div>
    </div>
  );
};

export default Slider;
