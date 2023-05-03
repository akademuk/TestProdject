import RESULT_1 from 'assets/images/result_1.png';
import RESULT_2 from 'assets/images/result_2.png';
import RESULT_3 from 'assets/images/result_3.png';
import RESULT_4 from 'assets/images/result_4.png';
import RESULT_5 from 'assets/images/result_5.png';
import RESULT_6 from 'assets/images/result_6.png';
import React, { Dispatch, SetStateAction } from 'react';

import Header from '../../shared/components/header';
import { useStyles } from './styles';

const Result: React.FC<{
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ setMobileMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Header setMobileMenu={setMobileMenu} isBlack />
      <div className={classes.container}>
        <span className={classes.title}>Результати</span>
        <div className={classes.wrapper}>
          <div className={classes.flex}>
            <div className={classes.item}>
              <img src={RESULT_1} className={classes.photo} alt="photo" />
              <div className={classes.text}>
                Проблему виявили, індивідуально підібрали курс і відразу
                розпочали роботу: 15 процедур ручної ліпосакції 5 процедур
                ТЕЙПУВАННЯ зони живота/боків 2 обгортання STYX
              </div>
            </div>
            <div className={classes.item}>
              <img src={RESULT_2} className={classes.photo} alt="photo" />
              <div className={classes.text}>
                На фото результат абонемента «S», в який входить 10 процедур
                ручної ліпосакції та 5 процедур найефективнішого гарячого
                обгортання STYX + 1 процедура в подарунок
              </div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.item}>
              <img src={RESULT_3} className={classes.photo} alt="photo" />
              <div className={classes.text}>
                На фото результат абонемента «S», в який входить 10 процедур
                ручної ліпосакції та 5 процедур найефективнішого гарячого
                обгортання STYX + 1 процедура в подарунок.
              </div>
            </div>
            <div className={classes.item}>
              <img src={RESULT_4} className={classes.photo} alt="photo" />
              <div className={classes.text}>
                Була зроблена велика робота, ми працювали в декілька курсів,
                почали з курсу S, в якому було 10 процедур ручної ліпосакції і 5
                процедур обгортання і продовжили курс базовим, чим підкріпили і
                посилили ефект.
              </div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.item}>
              <img src={RESULT_5} className={classes.photo} alt="photo" />
              <div className={classes.text}>
                Впоралися без використання ліполітиків, тільки ручна ліпосакція
                та гарячі обгортання STYX у правильній комбінації
              </div>
            </div>
            <div className={classes.item}>
              <img src={RESULT_6} className={classes.photo} alt="photo" />
              <div className={classes.text}>
                Поєднання ручної ліпосакції та тейпування. Результат вже після
                перших процедур, повірте, кайфувати від свого відображення у
                дзеркалі – це найкращий подарунок самій собі.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
