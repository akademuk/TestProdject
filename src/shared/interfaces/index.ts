export interface IDataModel {
  key: number;
  title: string;
  question: string;
  answers: {
    key: number;
    name: string;
    second_row: boolean;
    checkbox: boolean;
    three_row?: boolean;
  }[];
}

export interface IAnswerModel {
  [key: string]: boolean;
}

export interface IValidateModel {
  [key: string]: boolean | number | undefined;
}

export const enum TEST_RESULT {
  TYPE_1 = 'type_1',
  TYPE_2 = 'type_2',
  TYPE_3 = 'type_3',
  TYPE_4 = 'type_4',
}
