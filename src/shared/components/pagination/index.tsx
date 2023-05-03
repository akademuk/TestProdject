import classnames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { usePagination } from 'services/hooks/usePagination/usePagination';

import './styles.scss';
import { checkCheckbox } from '../../../pages/home-page/components/services/question-render/util';
import { IValidateModel } from '../../interfaces';

const Pagination = (props: {
  onPageChange: Dispatch<SetStateAction<number | string>>;
  setValidation: Dispatch<SetStateAction<boolean>>;
  totalCount: number;
  siblingCount?: 1 | undefined;
  currentPage: number;
  pageSize: number;
  className: string;
  validationObject: IValidateModel;
  setIsTouched: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    validationObject,
    setValidation,
    setIsTouched,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    const validateState = checkCheckbox(currentPage, validationObject);
    setValidation(validateState);
    setIsTouched(true);
    if (!validateState) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      <span className="page">{currentPage} / 7</span>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
