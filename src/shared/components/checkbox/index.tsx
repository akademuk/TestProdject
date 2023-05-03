import { useStyles } from './styles';

interface ICheckbox {
  onChange: () => void;
  checked: boolean;
  disable: boolean;
}
export const Checkbox: React.FC<ICheckbox> = ({
  onChange,
  checked,
  disable,
}) => {
  const classes = useStyles();
  return (
    <input
      type="checkbox"
      name="checkbox"
      className={`${classes.input} ${disable ? classes.error : ''}`}
      checked={checked}
      onChange={onChange}
    />
  );
};
