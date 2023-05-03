import photo_1 from 'assets/images/photo_1.png';
import photo_3 from 'assets/images/photo_3.png';
import photo_4 from 'assets/images/photo_4.png';
import photo_5 from 'assets/images/photo_5.png';
import photo_6 from 'assets/images/photo_6.png';
import photo_7 from 'assets/images/photo_7.png';
import photo_2 from 'assets/images/text_photo.png';
import React from 'react';
import './style.scss';
import { useWindowDimensions } from 'services/hooks/useDimensions/useWindowDimension';
import { EDimensions } from 'shared/constans';

const Photos: React.FC = () => {
  const dimensions = useWindowDimensions();
  const isMob = dimensions === EDimensions.SMALL;
  return (
    <>
      <span className="title">Наші центри</span>
      <div className="container">
        {!isMob && (
          <a className="vertical">
            <img src={photo_1} alt="photo" />
          </a>
        )}
        <a>
          <img src={photo_2} alt="photo" />
        </a>
        <a className="vertical">
          <img src={photo_3} alt="photo" />
        </a>
        {!isMob && (
          <a className="vertical">
            <img src={photo_4} alt="photo" />
          </a>
        )}
        {!isMob && (
          <a className="vertical">
            <img src={photo_5} alt="photo" />
          </a>
        )}
        <a className="vertical">
          <img src={photo_7} alt="photo" />
        </a>
        {!isMob && (
          <a>
            <img src={photo_6} alt="photo" />
          </a>
        )}
      </div>
    </>
  );
};

export default Photos;
