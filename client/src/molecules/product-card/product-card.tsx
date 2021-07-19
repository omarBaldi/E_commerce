import { FC } from 'react';
import ProductCardProps from './dto';
import Styles from './product-card.module.scss';
import { LinkRoute } from '../../atoms/link-route/link-route';

export const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductCardProps): JSX.Element => {
  const renderProducCard = (): JSX.Element => {
    return (
      <div className={Styles.productCardContainer}>
        <div className={Styles.imageContainer}>
          <img src={image} alt='' />
        </div>
        <div className={Styles.productCardText}>
          <p className={Styles.productCardTitle}>{title}</p>
          <p className={Styles.productCardPrice}>{`$ ${price}`}</p>
        </div>
      </div>
    );
  };

  return (
    <LinkRoute
      {...{
        url: `/product/${id}`,
        content: renderProducCard(),
      }}
    />
  );
};
export default ProductCard;
