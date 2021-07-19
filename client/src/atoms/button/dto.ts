export enum ButtonType {
  addToCart = 1,
  goTo = 2,
}

type ButtonProps = {
  text: string;
  type?: ButtonType;
  callbackFunc: () => void;
  customStyle?: any;
};

export default ButtonProps;
