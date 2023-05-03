import Logo from 'assets/images/logo.svg';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'services/hooks/useDimensions/useWindowDimension';
import { Checkbox } from 'shared/components/checkbox';
import Pagination from 'shared/components/pagination';
import { EDimensions, questions, validate } from 'shared/constans';
import { IAnswerModel, IValidateModel } from 'shared/interfaces';

import TestResult from '../../test-result';
import { useStyles } from './styles';
import { checkCheckbox, mobileValidation } from './util';

const PageSize = 1;

const QuestionRender = () => {
  const classes = useStyles();
  const [data, newData] = useState(questions);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const [isPageValidate, setPageValidate] = useState<boolean>(false);
  const [validateData, setValidateData] = useState<IValidateModel>(validate);
  const [currentPage, setCurrentPage] = useState<string | number>(1);
  const [answersData, setAnswers] = useState<IAnswerModel>({
    answer_1: false,
    answer_2: false,
    answer_3: false,
    answer_4: false,
    answer_5: false,
    answer_6: false,
    answer_7: false,
  });
  const dimensions = useWindowDimensions();
  const isMobile = EDimensions.SMALL === dimensions;
  const isPagination = !isSubmit && !isMobile;

  useEffect(() => {
    const firstPageIndex = (+currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const data = !isMobile
      ? questions.slice(firstPageIndex, lastPageIndex)
      : questions;
    const validateState = checkCheckbox(currentPage, validateData);
    setPageValidate(validateState);
    newData(data);
    setIsTouched(false);
  }, [currentPage, validateData, isPageValidate, isMobile]);

  return (
    <div className={classes.iphoneOverlay}>
      <div className={classes.container}>
        <img className={classes.logo} src={Logo} alt="logo" />
        {!isSubmit ? (
          <>
            <div>
              {data.map(({ title, question, key, answers }) => {
                const questionNumber = +key;
                return (
                  <div key={key}>
                    <span className={classes.title}>{title}</span>
                    <span className={classes.question}>{question}</span>
                    <div>
                      <div className={classes.answerWrapper}>
                        {answers.map(({ name, key, second_row, three_row }) => {
                          const field = validateData[`checked_${key}`];
                          return (
                            <div key={key} className={classes.answer}>
                              <div
                                className={
                                  second_row
                                    ? classes.answerTwoRow
                                    : classes.answerOneRow
                                }
                              >
                                <div
                                  className={
                                    three_row ? classes.threeRow : classes.name
                                  }
                                >
                                  {name}
                                </div>
                                <Checkbox
                                  onChange={() => {
                                    setIsTouched(true);
                                    setValidateData({
                                      ...validateData,
                                      [`checked_${key}`]: !field,
                                    });
                                  }}
                                  checked={Boolean(field)}
                                  disable={
                                    !isMobile
                                      ? isTouched && !isPageValidate
                                      : isTouched &&
                                        !answersData[`answer_${questionNumber}`]
                                  }
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {currentPage === questions.length && !isMobile && (
                        <button
                          className={classes.submitButton}
                          onClick={() => {
                            const validateState = checkCheckbox(
                              currentPage,
                              validateData
                            );
                            setPageValidate(validateState);
                            setIsTouched(true);
                            if (!validateState) return;
                            setSubmit(true);
                          }}
                        >
                          Отримати результат
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
              {isMobile && (
                <button
                  className={classes.submitButton}
                  onClick={() => {
                    const validateState = mobileValidation(validateData);
                    if (isMobile) setAnswers(validateState.answers);
                    setIsTouched(true);
                    if (!validateState.state) return;
                    setSubmit(true);
                  }}
                >
                  Отримати результат
                </button>
              )}
            </div>
          </>
        ) : (
          <TestResult validateObject={validateData} />
        )}
      </div>
      {isPagination && (
        <Pagination
          className="pagination-bar"
          currentPage={+currentPage}
          totalCount={questions.length}
          pageSize={PageSize}
          setValidation={setPageValidate}
          setIsTouched={setIsTouched}
          validationObject={validateData}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default QuestionRender;
