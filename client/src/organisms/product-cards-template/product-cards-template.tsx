import { FC } from 'react';
import ProductCardsTemplateProps from './dto';
import ProductCard from '../../molecules/product-card/product-card';

export const ProductCardsTemplate: FC<ProductCardsTemplateProps> = ({
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
