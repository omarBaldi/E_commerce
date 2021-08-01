import { Product } from '../../molecules/product-card/dto';

export type ProductCartType = Product & { currentNumberSelected: number };

type CheckoutProps = {
  productsCart: ProductCartType[];
  emitButtonCartEvent: any;
};

export default CheckoutProps;
