import { IDataModel, IValidateModel } from '../interfaces';
export const validate: IValidateModel = {
  checked_1: false,
  checked_2: false,
  checked_3: false,
  checked_4: false,
  checked_5: false,
  checked_6: false,
  checked_7: false,
  checked_8: false,
  checked_9: false,
  checked_10: false,
  checked_11: false,
  checked_12: false,
  checked_13: false,
  checked_14: false,
  checked_15: false,
  checked_16: false,
  checked_17: false,
  checked_18: false,
  checked_19: false,
  checked_20: false,
  checked_21: false,
  checked_22: false,
  checked_23: false,
  checked_24: false,
  checked_25: false,
  checked_26: false,
  checked_27: false,
  checked_28: false,
  checked_29: false,
};

export const questions: IDataModel[] = [
  {
    key: 1,
    title: 'запитання 1',
    question: 'Які зони вам би хотілось скорегувати?',
    answers: [
      {
        key: 1,
        name: 'Живіт та боки',
        second_row: false,
        checkbox: false,
      },
      {
        key: 2,
        name: 'Сідниці та ноги',
        second_row: false,
        checkbox: false,
      },
      {
        key: 3,
        name: 'Зони голіфе',
        second_row: false,
        checkbox: false,
      },
      {
        key: 4,
        name: 'Руки, спина',
        second_row: false,
        checkbox: false,
      },
      {
        key: 5,
        name: 'Зайвих об`ємів нема,але турбує целлюлит',
        second_row: true,
        checkbox: false,
      },
      {
        key: 6,
        name: 'Друге підборіддя',
        second_row: false,
        checkbox: false,
      },
    ],
  },
  {
    key: 2,
    title: 'запитання 2',
    question:
      'Чи схильні ви до набряків? Можливо помітили тяжкість в ногах ввечірі, ' +
      'сліди резинок від шкарпеток,або полоси від джинсів на тілі?',
    answers: [
      {
        key: 7,
        name: 'Так',
        second_row: false,
        checkbox: false,
      },
      {
        key: 8,
        name: 'Ні',
        second_row: false,
        checkbox: false,
      },
    ],
  },
  {
    key: 3,
    title: 'запитання 3',
    question: 'Чи маєте ви алергію на мед?',
    answers: [
      {
        key: 9,
        name: 'Так',
        second_row: false,
        checkbox: false,
      },
      {
        key: 10,
        name: 'Ні',
        second_row: false,
        checkbox: false,
      },
    ],
  },
  {
    key: 4,
    title: 'запитання 4',
    question: 'Наскільки ваша вага відрізняеться зараз від вашої ідеальної?',
    answers: [
      {
        key: 11,
        name: 'Маю скинути 2-3кг і буде ідеальна.',
        second_row: true,
        checkbox: false,
      },
      {
        key: 12,
        name: 'Мене влаштовує вага,я лише хочу покращити стан шкіри',
        second_row: true,
        checkbox: false,
      },
      {
        key: 13,
        name: 'В мене зайвих біля 10 кг,але я налаштована їх позбутися',
        second_row: true,
        checkbox: false,
      },
      {
        key: 14,
        name: 'Я вже значно схудла за останній час,і відчуваю що мені необхідний масаж для тонуса шкіри',
        second_row: true,
        checkbox: false,
      },
    ],
  },
  {
    key: 5,
    title: 'запитання 5',
    question: 'Чи маєте ви щось з цього переліку?',
    answers: [
      {
        key: 15,
        name: 'Вагітність 2 триместру',
        second_row: false,
        checkbox: false,
      },
      {
        key: 16,
        name: 'Вагітність 1 трисеместру, онкозахворювання, гемофілія,цукровий діабет 2 типу',
        second_row: true,
        three_row: true,
        checkbox: false,
      },
      {
        key: 17,
        name: 'ГВ',
        second_row: false,
        checkbox: false,
      },
      {
        key: 18,
        name: 'Гіпертонія,операційні втручання протягом останніх 3 місяців,прийом кроворозріджуючих препаратів',
        second_row: true,
        three_row: true,
        checkbox: false,
      },
      {
        key: 19,
        name: 'Варикозне розширення вен на ділянках,які ви хочете скорегувати.',
        second_row: true,
        three_row: true,
        checkbox: false,
      },
      {
        key: 20,
        name: 'Судинні сітки,зірочки',
        second_row: false,
        checkbox: false,
      },
    ],
  },
  {
    key: 6,
    title: 'запитання 6',
    question: 'Скільки Вам років?',
    answers: [
      {
        key: 21,
        name: '18 – 25 років',
        second_row: false,
        checkbox: false,
      },
      {
        key: 22,
        name: '26 – 35 років',
        second_row: false,
        checkbox: false,
      },
      {
        key: 23,
        name: '36 – 50 років',
        second_row: false,
        checkbox: false,
      },
      {
        key: 24,
        name: '51 – 65 років',
        second_row: false,
        checkbox: false,
      },
    ],
  },
  {
    key: 7,
    title: 'запитання 7',
    question: 'З якого ви міста?',
    answers: [
      {
        key: 25,
        name: 'Харків',
        second_row: false,
        checkbox: false,
      },
      {
        key: 26,
        name: 'Київ правий берег',
        second_row: false,
        checkbox: false,
      },
      {
        key: 27,
        name: 'Київ лівий берег',
        second_row: false,
        checkbox: false,
      },
      {
        key: 28,
        name: 'Одесса',
        second_row: false,
        checkbox: false,
      },
      {
        key: 29,
        name: 'Інше місто',
        second_row: false,
        checkbox: false,
      },
    ],
  },
];

export const NAVIGATION_ITEMS = [
  {
    key: 1,
    name: 'Головна',
    path: '/',
  },
  {
    key: 2,
    name: 'Про нас',
    path: 'about-us',
  },
  {
    key: 3,
    name: 'Абонементи',
    path: 'season-tickets',
  },
  {
    key: 4,
    name: 'Результати',
    path: 'result',
  },
];

export enum EDimensions {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  MIDDLE = 'MIDDLE',
  DESKTOP = 'DESKTOP',
  UNKNOWN = 'UNKNOWN',
}

export const DESKTOP_WIDTH = 1280;
export const LAPTOP_WIDTH = 1250;
export const MIDDLE_WIDTH = 1000;
export const TABLET_WIDTH = 768;

export const MAX_WIDTH_1400 = '@media (max-width: 1400px)';
export const MAX_WIDTH_1200 = '@media (max-width: 1250px)';
export const MAX_WIDTH_1000 = '@media (max-width: 1000px)';
export const MAX_WIDTH_767 = '@media (max-width: 767px)';
export const MAX_WIDTH_320 = '@media (max-width: 320px)';
