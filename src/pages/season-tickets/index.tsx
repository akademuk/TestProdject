import TICKET_1 from 'assets/images/ticket_1.png';
import TICKET_2 from 'assets/images/ticket_2.png';
import TICKET_3 from 'assets/images/ticket_3.png';
import TICKET_4 from 'assets/images/ticket_4.png';
import React, { Dispatch, SetStateAction } from 'react';
import Header from 'shared/components/header';

import { useStyles } from './styles';

export const SeasonTickets: React.FC<{
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ setMobileMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Header setMobileMenu={setMobileMenu} isBlack />
      <div className={classes.container}>
        <span className={classes.title}>Абонементи</span>
        <div className={classes.flex}>
          <img src={TICKET_1} className={classes.photo_one} alt="photo" />
          <div className={classes.list}>
            <div className={classes.subtitle}>Ручна ліпосакція</div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Абонемент “Базовий”</div>
                <div className={classes.price}>5600 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ручна ліпосакція із 10 процедур
              </p>
              <p className={classes.paragraph}>(10 процедур + 1 в подарунок)</p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Абонемент “S”</div>
                <div className={classes.price}>6350 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ручна ліпосакція із 10 процедур + 5 процедура обгортання STYX
              </p>
              <p className={classes.paragraph}>(15 процедур + 1 в подарунок)</p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Абонемент “XS”</div>
                <div className={classes.price}>9500 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ручна ліпосакція із 10 процедур + 5 процедур ін'єкцій
                ліполітіків
              </p>
              <p className={classes.paragraph}>(15 процедур + 1 в подарунок)</p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Абонемент “XS MAX”</div>
                <div className={classes.price}>8050 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ручна ліпосакція із 10 процедур + 5 процедура обгортання STYX +
                5
              </p>
              <p className={classes.paragraph}>
                процедур ін'єкцій ліполітіків (20 процедур + 1 в подарунок)
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>разова процедура обгортання</div>
                <div className={classes.price}>1000 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>
                  курс із 5 процедур обгортання{' '}
                </div>
                <div className={classes.price}>3500 грн</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.list}>
            <div className={classes.subtitle}>Ліфтинг обличчя</div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Абонемент “PUSH UP mini”</div>
                <div className={classes.price}>3750 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ліфтинг обличчя із 5 процедур + 1 процедура в подарунок
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Абонемент “PUSH UP midi”</div>
                <div className={classes.price}>6000 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ліфтинг обличчя із 10 процедур + 1 процедура в подарунок
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Абонемент “PUSH UP maxi” </div>
                <div className={classes.price}>9500 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ліфтинг обличчя із 20 процедур + 2 процедури в подарунок
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>
                  ліфтинг обличчя без абонемента
                </div>
                <div className={classes.price}>800 грн</div>
              </div>
              <div className={classes.timeline}>Тривалість - 50 хв</div>
            </div>
          </div>
          <img src={TICKET_2} className={classes.photo_two} alt="photo" />
        </div>
        <span className={classes.title}>Інші види послуг</span>
        <div className={classes.flex}>
          <img src={TICKET_3} className={classes.photo_one} alt="photo" />
          <div className={classes.list}>
            <div className={classes.subtitle}>Тейпування</div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Передня частина ніг</div>
                <div className={classes.price}>450 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>внутрішня поверхня стегна</div>
                <div className={classes.price}>450 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Задня поверхня стегна</div>
                <div className={classes.price}>500 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>коліна</div>
                <div className={classes.price}>350 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>
                  КОМПЛЕКС: передня частина ніг+внутрішня+коліна
                </div>
                <div className={classes.price}>850 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Холка</div>
                <div className={classes.price}>450 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Холка</div>
                <div className={classes.price}>450 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Галіфе</div>
                <div className={classes.price}>450 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Зона сідниць</div>
                <div className={classes.price}>500 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>коМПЛЕКС: Сідниці + галіфе</div>
                <div className={classes.price}>750 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>живіт</div>
                <div className={classes.price}>550 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Боки</div>
                <div className={classes.price}>400 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Комплекс: живіт + боки</div>
                <div className={classes.price}>800 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Ікри</div>
                <div className={classes.price}>350 грн</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>зона рук</div>
                <div className={classes.price}>450 грн</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.list}>
            <div className={classes.subtitle}>Комплексні послуги</div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>Лімфодренажний масаж</div>
                <div className={classes.price}>1000 грн</div>
              </div>
              <div className={classes.timeline}>Тривалість - 60 хв</div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>FULL BODY BLADE (FBB)</div>
                <div className={classes.price}>1000 грн</div>
              </div>
              <p className={classes.paragraph}>Загальний блейд-масаж тіла</p>
              <div className={classes.timeline}>Тривалість - 60 хв</div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>DEEP BODY BLADE (DBB)</div>
                <div className={classes.price}>1000 грн</div>
              </div>
              <p className={classes.paragraph}>Ручна ліпосакція + блейд</p>
              <div className={classes.timeline}>Тривалість - 60 хв</div>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <div className={classes.name}>DEEP BODY BLADE (DBB)</div>
                <div className={classes.price}>10000 грн</div>
              </div>
              <p className={classes.paragraph}>
                Ручна ліпосакція + блейд з 10 процедур
              </p>
            </div>
          </div>
          <img src={TICKET_4} className={classes.photo_four} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default SeasonTickets;
