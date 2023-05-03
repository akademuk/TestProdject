import VIDEO_ONE from 'assets/images/1.mp4';
import VIDEO_TWO from 'assets/images/2.mp4';
import VIDEO_THREE from 'assets/images/3.mp4';
import LAYOUT_1 from 'assets/images/layout_1.png';
import LAYOUT_2 from 'assets/images/layout_2.png';
import LAYOUT_3 from 'assets/images/layout_3.png';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useStyles } from './styles';

const Videos: React.FC = () => {
  const classes = useStyles();
  const [videosState, setVideosState] = useState({
    video_one: false,
    video_two: false,
    video_three: false,
  });

  const video_one = useRef<HTMLVideoElement | null>(null);
  const video_two = useRef<HTMLVideoElement | null>(null);
  const video_three = useRef<HTMLVideoElement | null>(null);

  const handleVideos = useCallback(() => {
    if (!videosState.video_one && video_one.current) {
      video_one.current?.pause();
    }

    if (!videosState.video_two && video_two.current) {
      video_two.current?.pause();
    }

    if (!videosState.video_three && video_three.current) {
      video_three.current?.pause();
    }
  }, [videosState.video_one, videosState.video_three, videosState.video_two]);

  useEffect(() => {
    handleVideos();
  }, [handleVideos, videosState]);

  const playVideo = (ref: React.MutableRefObject<HTMLVideoElement | null>) => {
    ref.current && ref.current.play();
  };

  return (
    <div className={classes.videos}>
      <span className={classes.title}>Рекомендації від наших клієнтів</span>
      <div className={classes.wrapper}>
        <div className={classes.video}>
          <div className={classes.videoWrapper}>
            <video ref={video_one} loop poster={LAYOUT_1}>
              <source src={VIDEO_ONE} type="video/mp4" />
            </video>
            {!videosState.video_one && (
              <div
                className={classes.playIcon}
                onClick={() => {
                  setVideosState({
                    video_two: false,
                    video_three: false,
                    video_one: true,
                  });
                  playVideo(video_one);
                }}
              />
            )}
          </div>
          <div className={classes.text}>
            Безумовно, найкращий сервіс, якістю масажу я дуже задоволена.
          </div>
        </div>
        <div className={classes.video}>
          <div className={classes.videoWrapper}>
            <video ref={video_two} loop poster={LAYOUT_2}>
              <source src={VIDEO_THREE} type="video/mp4" />
            </video>
            {!videosState.video_two && (
              <div
                className={classes.playIcon}
                onClick={() => {
                  setVideosState({
                    video_one: false,
                    video_two: true,
                    video_three: false,
                  });
                  playVideo(video_two);
                }}
              />
            )}
          </div>
          <div className={classes.text}>
            Якщо ви хочете змінити своє тіло та життя - раджу звернутись за
            допомогою в Body Control.
          </div>
        </div>
        <div className={classes.video}>
          <div className={classes.videoWrapper}>
            <video ref={video_three} loop poster={LAYOUT_3}>
              <source src={VIDEO_TWO} type="video/mp4" />
            </video>
            {!videosState.video_three && (
              <div
                className={classes.playIcon}
                onClick={() => {
                  setVideosState({
                    video_one: false,
                    video_three: true,
                    video_two: false,
                  });
                  playVideo(video_three);
                }}
              />
            )}
          </div>
          <div className={classes.text}>
            Тільки в руках спеціалістів Body Control ви побачите результат вже
            після перших сеансів.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
