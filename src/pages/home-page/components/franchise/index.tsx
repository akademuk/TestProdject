import ARROW_BTN from 'assets/images/arrow-button.svg';
import MOBILE_PHOTO from 'assets/images/mobile-photo.png';
import PHOTO from 'assets/images/salon-image.png';
import TABLET_PHOTO from 'assets/images/tablet-salon.png';
import React, { Dispatch, SetStateAction } from 'react';
import { useWindowDimensions } from 'services/hooks/useDimensions/useWindowDimension';
import { EDimensions } from 'shared/constans';

import { useStyles } from './styles';

const Franchise: React.FC<{
  setWorkModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setWorkModal }) => {
  const classes = useStyles();
  const dimensions = useWindowDimensions();

  const appendPhoto = () => {
    if (dimensions === EDimensions.DESKTOP) return PHOTO;
    if (dimensions === EDimensions.MEDIUM) return TABLET_PHOTO;
    return MOBILE_PHOTO;
  };
  const photo = appendPhoto();

  return (
    <div className={classes.wrapper}>
      <img src={photo} alt="photo" className={classes.photo} />
      <div className={classes.mobileFranchise}>
        <div
          className={classes.franchise_info}
          onClick={() => setWorkModal(true)}
        >
          <img src={ARROW_BTN} className={classes.arrowBtn} alt="arrow btn" />
          <span>детальніше про франшизу</span>
        </div>
      </div>
      <div className={classes.textSide}>
        <span className={classes.title}>Франшиза</span>
        <div className={classes.description}>
          Ми розвиваємо наші центр ручної корекції фігури вже понад 4 роки,
          успішно пережили кілька криз і навчилися стабільно зростати. Ми
          вбережемо вас від помилкових кроків і прихованих складнощів, бо
          пройшли через них самі та навчилися на власних помилках. Ми навчимо
          важливим нюансам - від правил підбору персоналу до способів вивести
          свій бізнес на високий рівень. Самоокупність 6 місяців і прибуток від
          5000$ на місяць, місяць на відкриття і навчання співробітників.
        </div>
        <div className={classes.desktopFranchise}>
          <div
            className={classes.franchise_info}
            onClick={() => setWorkModal(true)}
          >
            <img src={ARROW_BTN} className={classes.arrowBtn} alt="arrow btn" />
            <span>детальніше про франшизу</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
