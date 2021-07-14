import { FC } from 'react';
import ProductCardProps from './dto';
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
      <div
        style={{
          maxWidth: '300px',
          border: '1px solid #333',
          cursor: 'pointer',
        }}
      >
        <p>{title}</p>
        <p>{description}</p>
        <p>{category}</p>
        <img src={image} alt='' style={{ height: 'auto', width: '100%' }} />
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
