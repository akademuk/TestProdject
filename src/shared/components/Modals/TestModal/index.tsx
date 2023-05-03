import CLOSE_ICON from 'assets/images/close-icon.svg';
import QuestionRender from 'pages/home-page/components/services/question-render';
import React, { Dispatch, SetStateAction } from 'react';

import { useStyles } from './styles';

const TestModal: React.FC<{
  isOpen: boolean;
  setTestModalOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setTestModalOpen }) => {
  const classes = useStyles({ isOpen: isOpen });
  return (
    <div className={`${classes.container}${!isOpen ? classes.none : ''}`}>
      <div className={classes.wrapper}>
        <img
          src={CLOSE_ICON}
          className={classes.closeIcon}
          onClick={() => {
            setTestModalOpen(false);
          }}
          alt="close icon"
        />
        <QuestionRender />
      </div>
    </div>
  );
};

export default TestModal;
