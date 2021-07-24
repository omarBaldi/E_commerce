import { Product } from '../../molecules/product-card/dto';

type CheckoutProps = {
  productsCart: (Product & { currentNumberSelected: number })[];
};

export default CheckoutProps;
