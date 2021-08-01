import { FC } from 'react';
import Separator from '../../atoms/separator/separator';
import ProductCheckoutTemplate from '../../organisms/product-checkout-template/product-checkout-template';
import CheckoutProps from './dto';
import Styles from './checkout.module.scss';

export const Checkout: FC<CheckoutProps> = ({
  productsCart,
  emitButtonCartEvent,
}: CheckoutProps): JSX.Element => {
  const getTotalAmountOfProducts = (): number => {
    return productsCart.reduce((acc, curr) => {
      return (acc += curr.currentNumberSelected);
    }, 0) as number;
  };

  const renderCheckoutTitle = (): JSX.Element => {
    return (
      <div>
        <p>Shopping cart</p>
        <p>{getTotalAmountOfProducts()}</p>
      </div>
    );
  };

  return (
    <div className={Styles.checkoutContainer}>
      <div className={Styles.checkoutCards}>
        {renderCheckoutTitle()}
        <Separator />
        <ProductCheckoutTemplate
          {...{
            productsCart,
            callBackButton: emitButtonCartEvent,
          }}
        />
      </div>
      <div className={Styles.checkoutSummary}></div>
    </div>
  );
};
export default Checkout;
