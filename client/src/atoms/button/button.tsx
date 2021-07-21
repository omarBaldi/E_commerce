import { FC } from 'react';
import ButtonProps, { ButtonType } from './dto';
import Styles from './button.module.scss';

export const Button: FC<ButtonProps> = ({
  text,
  type,
  callbackFunc,
  customStyle,
}: ButtonProps): JSX.Element => {
  const checkButtonStyle = (): string => {
    switch (type) {
      case ButtonType.goTo:
      default:
        return Styles.buttonGoTo;
      case ButtonType.addToCart:
        return Styles.buttonAddToCart;
    }
  };

  return (
    <div
      className={`${checkButtonStyle()}`}
      onClick={callbackFunc}
      style={{ ...customStyle }}
    >
      {text}
    </div>
  );
};
export default Button;
