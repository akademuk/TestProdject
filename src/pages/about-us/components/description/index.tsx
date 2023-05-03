import BIG_IMAGE from 'assets/images/bigSalonImage.png';
import GURAN_1 from 'assets/images/guran_1.png';
import GURAN_2 from 'assets/images/guran_2.png';
import GURAN_3 from 'assets/images/guran_3.png';
import GURAN_4 from 'assets/images/guran_4.png';
import SMALL_ONE from 'assets/images/smallSalonImage_1.png';
import SMALL_TWO from 'assets/images/smallSalonImage_2.png';
import React from 'react';

import { useStyles } from './styles';

const Description: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <span className={classes.title}>ХТО МИ?</span>
      <div className={classes.wrapper}>
        <div className={classes.photoWrapper}>
          <img src={BIG_IMAGE} className={classes.bigImage} alt="image" />
          <div className={classes.flex}>
            <img src={SMALL_ONE} className={classes.smallOne} alt="image" />
            <img src={SMALL_TWO} className={classes.smallTwo} alt="image" />
          </div>
        </div>
        <div className={classes.description}>
          <p>
            <span>Body Control </span> - це сім'я справжніх професіоналів, яких
            вже понад 4 роки об'єднує прагнення до створення краси.
          </p>
          <p>
            За цей час ми здобули довіру серед найпрекраснішої половини
            країни,та завдяки нашим результатам - лідируємо на ринку естетичної
            краси. Перший центр ручної корекції фігури було відкрито у 2018
            році, в місті герої Харкові. Тоді й почалася наша історія
            нескінченного прагнення до досконалості.
          </p>
          <p>
            Body Control сьогодні - це 4 центри ручної корекції фігури, в трьох
            містах України, де на вас чекають майстри своєї справи, які кожен
            день готові тебе дивувати.
          </p>
          <p>
            Місія Body Control - максимально розкривати і підкреслювати природні
            зовнішні дані наших клієнтів, а не створювати штучні образи, в яких
            їм буде некомфортно. Наші авторські методики корекції фігури не
            залишать тебе байдужою, а наші майстри скорегують проблемні зони без
            хірургічного втручання та періоду реабілітації.
          </p>
        </div>
      </div>
      <div className={classes.guarantees}>
        <span className={classes.guaranteesTitle}>Ми гарантуємо:</span>
        <div className={classes.guaranteesWrapper}>
          <div className={classes.guaranteesItem}>
            <img src={GURAN_1} className={classes.guaranteesImg} alt="img" />
            <div className={classes.guaranteesText}>
              до - 12 см в об’ємах за один курс
            </div>
          </div>
          <div className={classes.guaranteesItem}>
            <img src={GURAN_2} className={classes.guaranteesImg} alt="img" />
            <div className={classes.guaranteesText}>
              позбавлення від зайвої рідини
            </div>
          </div>
          <div className={classes.guaranteesItem}>
            <img src={GURAN_3} className={classes.guaranteesImg} alt="img" />
            <div className={classes.guaranteesText}>
              рівну та підтягнуту шкіру без целюліту
            </div>
          </div>
          <div className={classes.guaranteesItem}>
            <img src={GURAN_4} className={classes.guaranteesImg} alt="img" />
            <div className={classes.guaranteesText}>
              результат вже після першої процедури.
            </div>
          </div>
        </div>
        <span className={classes.generalText}>
          Ми настільки впевнені в собі, що готові повернути гроші у разі
          незадовільного результату,але ми гарантуємо,ти залишишся у повному
          екстазі від процесу та результату !
        </span>
      </div>
    </>
  );
};

export default Description;
