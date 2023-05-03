import React from 'react';
import { useWindowDimensions } from 'services/hooks/useDimensions/useWindowDimension';
import { EDimensions } from 'shared/constans';
import { IValidateModel, TEST_RESULT } from 'shared/interfaces';

import { useStyles } from './styles';
import { displayResultSeasons } from './util/util';

interface ITestResultModel {
  validateObject: IValidateModel;
}

const tickets = [
  {
    key: 1,
    name: '«XS max»',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_2, TEST_RESULT.TYPE_3],
  },
  {
    key: 2,
    name: '«Light fit»',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_3],
  },
  {
    key: 3,
    name: '«S»',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_2, TEST_RESULT.TYPE_3],
  },
  {
    key: 4,
    name: '«FBB»',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_2, TEST_RESULT.TYPE_3],
  },
  {
    key: 5,
    name: '«DBB»',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_2, TEST_RESULT.TYPE_3],
  },
  {
    key: 6,
    name: 'Тейпи',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_2],
  },
  {
    key: 7,
    name: ' «XS»',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_2, TEST_RESULT.TYPE_3],
  },
  {
    key: 8,
    name: '«S холодні обгортання»',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_2, TEST_RESULT.TYPE_3],
  },
  {
    key: 9,
    name: 'Ліфтинг обличчя',
    types: [TEST_RESULT.TYPE_1, TEST_RESULT.TYPE_3],
  },
  {
    key: 9,
    name: '«Базовий»',
    types: [TEST_RESULT.TYPE_2],
  },
  {
    key: 10,
    name: '«Базовий + тейпи»',
    types: [TEST_RESULT.TYPE_3],
  },
];

const TestResult: React.FC<ITestResultModel> = ({ validateObject }) => {
  const currentSeason = displayResultSeasons(validateObject);
  const dimensions = useWindowDimensions();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.title}>
        Абонементи та послуги, які вам підходять:
      </span>
      {TEST_RESULT.TYPE_4 !== currentSeason ? (
        <>
          <div className={classes.wrapper}>
            {tickets
              .filter((season) => season.types.includes(currentSeason))
              .map(({ name, key }) => (
                <div key={key} className={classes.seasonTicket}>
                  {name}
                </div>
              ))}
          </div>
          {dimensions === EDimensions.DESKTOP && (
            <a href="season-tickets" className={classes.price}>
              Дізнатись вартість
            </a>
          )}
        </>
      ) : (
        <div className={classes.box}>
          <span className={classes.phoneTitle}>
            Для підбору процедури зверніться за телефоном
          </span>
          <div className={classes.phoneWrapper}>
            <p className={classes.phone}>+380983131300</p>
            <p className={classes.phone}>+380509500100</p>
            <p className={classes.phone}>+380977011770</p>
            <p className={classes.phone}>+380977490707</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResult;
