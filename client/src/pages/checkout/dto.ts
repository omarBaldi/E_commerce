import { Product } from '../../molecules/product-card/dto';

export enum ButtonAction {
  Decrement = 1,
  Increment = 2,
}

type CheckoutProps = {
  productsCart: (Product & { currentNumberSelected: number })[];
  callBackButton?: (productClicked: Product, action: ButtonAction) => void;
};

export default CheckoutProps;
