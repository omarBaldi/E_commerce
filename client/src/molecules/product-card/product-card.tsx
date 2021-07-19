import { FC } from 'react';
import ProductCardProps from './dto';
import Styles from './product-card.module.scss';
import { LinkRoute } from '../../atoms/link-route/link-route';
import Button from '../../atoms/button/button';
import { ButtonType } from '../../atoms/button/dto';

export const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductCardProps): JSX.Element => {
  const renderCardButton = (): JSX.Element => {
    const buttonGoToCustomStyle = {
      marginTop: 'auto',
    };

    return (
      <Button
        {...{
          text: 'View Product',
          callbackFunc: () => console.log('Go to specifc item button clicked'),
          type: ButtonType.goTo,
          customStyle: buttonGoToCustomStyle,
        }}
      />
    );
  };

  const renderProductCard = (): JSX.Element => {
    const buttonAddToCartCustomStyle = {
      position: 'absolute',
      top: '-1rem',
      right: '-0.5rem',
    };

    return (
      <div className={Styles.productCardContainer}>
        <Button
          {...{
            text: '+',
            callbackFunc: () => console.log('Add to cart button clicked'),
            type: ButtonType.addToCart,
            customStyle: buttonAddToCartCustomStyle,
          }}
        />
        <div className={Styles.imageContainer}>
          <img src={image} alt='' />
        </div>
        <div className={Styles.productCardText}>
          <p className={Styles.productCardTitle}>{title}</p>
          <p className={Styles.productCardPrice}>{`$ ${price}`}</p>
          <LinkRoute
            {...{
              url: `/product/${id}`,
              content: renderCardButton(),
            }}
          />
        </div>
      </div>
    );
  };

  return renderProductCard();
};
export default ProductCard;
