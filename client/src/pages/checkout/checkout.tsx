import { FC } from 'react';
import CheckoutProps from './dto';

export const Checkout: FC<CheckoutProps> = ({
  productsCart,
}: CheckoutProps): JSX.Element => {
  return (
    <div>
      {productsCart.map((currentProduct, _) => {
        return (
          <div
            key={currentProduct.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2rem',
              borderBottom: '1px solid lightgrey',
            }}
          >
            <p style={{ textTransform: 'uppercase', marginRight: '1rem' }}>
              {currentProduct.title}
            </p>
            <p style={{ marginRight: '1rem' }}>{currentProduct.price}</p>
            <p style={{ marginRight: '1rem' }}>{currentProduct.category}</p>
            <img src={currentProduct.image} alt='' style={{ width: '50px' }} />
            <div
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bolder',
                fontSize: '1.2em',
              }}
            >
              {currentProduct.currentNumberSelected}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Checkout;
