import IMAGE_1 from 'assets/images/image_71.png';
import IMAGE_2 from 'assets/images/image_72.png';
import IMAGE_3 from 'assets/images/image_73.png';
import IMAGE_4 from 'assets/images/image_74.png';
import React from 'react';

import { useWindowDimensions } from '../../../../services/hooks/useDimensions/useWindowDimension';
import Slider from '../../../../shared/components/Slider';
import { EDimensions } from '../../../../shared/constans';
import { useStyles } from './styles';

const testimonials = [
  {
    key: 1,
    name: 'Тетяна',
    testimonial:
      'Щоразу, коли я відвідую цей центр, перше, що впадає мені в око, - ' +
      'це приємні дівчата на ресепшні, які завжди усміхнені та ввічливі. ' +
      'Це налаштовує на позитивний лад перед початком будь-якої процедури. ' +
      'Мені не страшно віддавати себе в руки фахівців Body control,' +
      ' оскільки рівень їхньої кваліфікації не викликає в мене сумнівів.',
    email: '@tanyaparfileva',
    logo: IMAGE_1,
  },
  {
    key: 2,
    name: 'Лариса',
    testimonial:
      'Велике спасибі майстрам за складну, ' +
      'але на совість виконану роботу! Особливо за індивідуальний підхід і швидкість. ' +
      'Обов`язково прийду до Вас ще не раз!',
    email: '@lyalya_bounty',
    logo: IMAGE_2,
  },
  {
    key: 3,
    name: 'Слава',
    testimonial:
      'Була в Body control на ручній ліпосакції. У дівчаток просто золоті руки! Зробили мені прекрасну фігуру.',
    email: '@babaslavka',
    logo: IMAGE_3,
  },
  {
    key: 4,
    name: 'Галина',
    testimonial:
      'Відвідувала ручний масаж, все пройшло чітко за часом, дякую що привели до ладу моє тіло.',
    email: '@galyna_naumenko',
    logo: IMAGE_4,
  },
];
const Testimonials: React.FC = () => {
  const classes = useStyles();
  const dimensions = useWindowDimensions();
  const isMobile = EDimensions.SMALL === dimensions;
  return (
    <>
      <span className={classes.title}>Відгуки</span>
      {!isMobile ? (
        <div className={classes.wrapper}>
          {testimonials.map(({ name, testimonial, key, email, logo }) => (
            <div key={key} className={classes.authorBlock}>
              <div className={classes.wrapperItem}>
                <img src={logo} alt="logo" className={classes.logo} />
                <div>
                  <div className={classes.name}>{name}</div>
                  <div className={classes.testimonial}>{testimonial}</div>
                  <div className={classes.nickName}>{email}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider array={testimonials} />
      )}
    </>
  );
};

export default Testimonials;
