import { FC } from 'react';
import Separator from '../../atoms/separator/separator';
import ProductCheckoutTemplate from '../../organisms/product-checkout-template/product-checkout-template';
import CheckoutProps, { ProductCartType } from './dto';
import Styles from './checkout.module.scss';
import { Product } from '../../molecules/product-card/dto';
import Button from '../../atoms/button/button';
import { ButtonType } from '../../atoms/button/dto';

export const Checkout: FC<CheckoutProps> = ({
  productsCart,
  emitButtonCartEvent,
}: CheckoutProps): JSX.Element => {
  const getTotalAmountOfProducts = (): number => {
    return productsCart.reduce((acc: number, curr: ProductCartType) => {
      return (acc += curr.currentNumberSelected);
    }, 0) as number;
  };

  const renderCheckoutTitle = (): JSX.Element => {
    return (
      <div>
        <p>Shopping cart</p>
        <p>
          {getTotalAmountOfProducts() > 0
            ? `${getTotalAmountOfProducts()} items`
            : 'No items selected'}
        </p>
      </div>
    );
  };

  const calculateTotalMoneyAmount = (): number => {
    return productsCart.reduce((acc: number, curr: ProductCartType) => {
      const { price, currentNumberSelected } = curr;
      return (acc += price * currentNumberSelected);
    }, 0);
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
      <div className={Styles.checkoutSummary}>
        <p>Order summary</p>
        <Separator />
        <div className={Styles.totalAmountContainer}>
          <p>Total cost </p>
          <p
            className={Styles.totalMoney}
          >{`${calculateTotalMoneyAmount()} $`}</p>
        </div>
        <div>
          <Button
            {...{
              text: 'Checkout',
              type: ButtonType.goTo,
              callbackFunc: () => console.log('Button checkout clicked'),
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Checkout;
