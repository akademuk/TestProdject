import { IValidateModel, TEST_RESULT } from '../../../../../shared/interfaces';

export const displayResultSeasons = (validateObject: IValidateModel) => {
  if (
    validateObject.checked_6 &&
    !validateObject.checked_16 &&
    validateObject.checked_10
  )
    return TEST_RESULT.TYPE_3;
  if (validateObject.checked_6 && !validateObject.checked_16)
    return TEST_RESULT.TYPE_1;
  if (
    !validateObject.checked_6 &&
    !validateObject.checked_16 &&
    (validateObject.checked_1 ||
      validateObject.checked_2 ||
      validateObject.checked_3 ||
      validateObject.checked_4 ||
      validateObject.checked_5)
  )
    return TEST_RESULT.TYPE_2;
  return TEST_RESULT.TYPE_4;
};
