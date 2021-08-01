import { Product } from '../../molecules/product-card/dto';
import { ProductCartType } from '../../pages/checkout/dto';

export enum ButtonAction {
  Decrement = 1,
  Increment = 2,
}

type ProductCheckoutTemplateProps = {
  productsCart: ProductCartType[];
  callBackButton?: (productClicked: Product, action: ButtonAction) => void;
};

export default ProductCheckoutTemplateProps;
