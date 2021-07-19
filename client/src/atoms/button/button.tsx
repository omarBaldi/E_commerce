import { FC, HTMLAttributes } from 'react';
import ButtonProps, { ButtonType } from './dto';
import Styles from './button.module.scss';

export const Button: FC<ButtonProps> = ({
  text,
  type,
  callbackFunc,
  customStyle,
}: ButtonProps): JSX.Element => {
  const checkButtonTypeAndRender = (): JSX.Element => {
    switch (type) {
      case ButtonType.goTo:
      default:
        return (
          <div
            className={`${Styles.buttonGoTo}`}
            onClick={callbackFunc}
            style={{ ...customStyle }}
          >
            {text}
          </div>
        );
      case ButtonType.addToCart:
        return (
          <div
            className={`${Styles.buttonAddToCart}`}
            onClick={callbackFunc}
            style={{ ...customStyle }}
          >
            {text}
          </div>
        );
    }
  };

  return checkButtonTypeAndRender();
};
export default Button;
