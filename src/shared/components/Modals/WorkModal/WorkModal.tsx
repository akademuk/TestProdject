import CLOSE_ICON from 'assets/images/close-icon.svg';
import { Dispatch, SetStateAction } from 'react';

import { useStyles } from './styles';

const TestModal: React.FC<{
  isOpen: boolean;
  setWorkModal: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setWorkModal }) => {
  const classes = useStyles({ isOpen: isOpen });
  return (
    <div
      className={`${classes.container}${!isOpen ? classes.none : ''}`}
      onClick={() => {
        setWorkModal(false);
      }}
    >
      <div className={classes.wrapper} onClick={(e) => e.stopPropagation()}>
        <img
          src={CLOSE_ICON}
          className={classes.closeIcon}
          onClick={() => {
            setWorkModal(false);
          }}
          alt="close icon"
        />
      </div>
    </div>
  );
};

export default TestModal;
