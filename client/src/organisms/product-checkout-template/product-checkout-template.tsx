import { FC } from 'react';
import ProductCheckoutTemplateProps, { ButtonAction } from './dto';

export const ProductCheckoutTemplate: FC<ProductCheckoutTemplateProps> = ({
  productsCart,
  callBackButton,
}: ProductCheckoutTemplateProps): JSX.Element => {
  const sendButtonEvent = (...args: any): void => {
    callBackButton && callBackButton(args[0], args[1]);
  };

  return (
    <div>
      {productsCart
        .filter((el) => el.currentNumberSelected > 0)
        .map((currentProduct, _) => {
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
              <img
                src={currentProduct.image}
                alt=''
                style={{ width: '50px', marginRight: '4rem' }}
              />

              <button
                style={{ padding: '0 1rem' }}
                onClick={() =>
                  sendButtonEvent(currentProduct, ButtonAction.Decrement)
                }
              >
                -
              </button>
              <div
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 'bolder',
                  fontSize: '1.2em',
                  margin: '0 2rem',
                }}
              >
                {currentProduct.currentNumberSelected}
              </div>
              <button
                style={{ padding: '0 1rem' }}
                onClick={() =>
                  sendButtonEvent(currentProduct, ButtonAction.Increment)
                }
              >
                +
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default ProductCheckoutTemplate;
