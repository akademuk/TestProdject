import { IAnswerModel, IValidateModel } from 'shared/interfaces';

export const checkCheckbox = (
  page: number | string,
  validate: IValidateModel
) => {
  if (page === 1) {
    return !!(
      validate.checked_1 ||
      validate.checked_2 ||
      validate.checked_3 ||
      validate.checked_4 ||
      validate.checked_5 ||
      validate.checked_6
    );
  }
  if (page === 2) {
    return !!(validate.checked_7 || validate.checked_8);
  }
  if (page === 3) {
    return !!(validate.checked_9 || validate.checked_10);
  }
  if (page === 4) {
    return !!(
      validate.checked_11 ||
      validate.checked_12 ||
      validate.checked_13 ||
      validate.checked_14
    );
  }
  if (page === 4) {
    return !!(
      validate.checked_11 ||
      validate.checked_12 ||
      validate.checked_13 ||
      validate.checked_14
    );
  }
  if (page === 5) {
    return !!(
      validate.checked_15 ||
      validate.checked_16 ||
      validate.checked_17 ||
      validate.checked_18 ||
      validate.checked_19 ||
      validate.checked_20
    );
  }
  if (page === 6) {
    return !!(
      validate.checked_21 ||
      validate.checked_22 ||
      validate.checked_23 ||
      validate.checked_24
    );
  }
  if (page === 7) {
    return !!(
      validate.checked_25 ||
      validate.checked_26 ||
      validate.checked_27 ||
      validate.checked_28 ||
      validate.checked_29
    );
  }
  return false;
};

const validateOneField = (
  field: boolean,
  answers: IAnswerModel,
  answer: number
) => {
  const array = [];
  array.push(field);
  const isValid = Boolean(array.find((item) => item === true));
  if (isValid) {
    answers = {
      ...answers,
      [`answer_${answer}`]: Boolean(field),
    };
  }
  return answers;
};

export const mobileValidation = (validate: IValidateModel) => {
  let answers: IAnswerModel = {
    answer_1: false,
    answer_2: false,
    answer_3: false,
    answer_4: false,
    answer_5: false,
    answer_6: false,
    answer_7: false,
  };

  for (const validateKey in validate) {
    const replaceStringValue = validateKey.split('_');
    const key = +replaceStringValue[replaceStringValue.length - 1];
    if (key >= 1 && key <= 6) {
      answers = validateOneField(Boolean(validate[validateKey]), answers, 1);
    }
    if (key >= 7 && key <= 8) {
      answers = validateOneField(Boolean(validate[validateKey]), answers, 2);
    }
    if (key >= 9 && key <= 10) {
      answers = validateOneField(Boolean(validate[validateKey]), answers, 3);
    }
    if (key >= 11 && key <= 14) {
      answers = validateOneField(Boolean(validate[validateKey]), answers, 4);
    }
    if (key >= 15 && key <= 20) {
      answers = validateOneField(Boolean(validate[validateKey]), answers, 5);
    }
    if (key >= 21 && key <= 24) {
      answers = validateOneField(Boolean(validate[validateKey]), answers, 6);
    }
    if (key >= 25 && key <= 29) {
      answers = validateOneField(Boolean(validate[validateKey]), answers, 7);
    }
  }
  return {
    answers,
    state:
      answers.answer_1 &&
      answers.answer_2 &&
      answers.answer_3 &&
      answers.answer_4 &&
      answers.answer_5 &&
      answers.answer_6 &&
      answers.answer_7,
  };
};
