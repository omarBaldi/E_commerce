import { FC } from 'react';
import ProductCardsTemplateProps from './dto';
import ProductCard from '../../molecules/product-card/product-card';

export const ProductCardsTemplate: FC<ProductCardsTemplateProps> = ({
  title,
  products,
  onProductCardClick,
}: ProductCardsTemplateProps): JSX.Element => {
  const renderCards = (): JSX.Element[] => {
    return products.map((currentProduct, _) => {
      return (
        <ProductCard
          key={currentProduct.id}
          {...{
            ...currentProduct,
            productAdded: onProductCardClick,
          }}
        />
      );
    });
  };

  return (
    <>
      <h3>{title}</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(300px, 500px))',
          columnGap: '2rem',
          padding: '3rem',
        }}
      >
        {renderCards()}
      </div>
    </>
  );
};
export default ProductCardsTemplate;
