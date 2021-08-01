import { FC } from 'react';
import HomepageProps from './dto';
import ProductCardsTemplate from '../../organisms/product-cards-template/product-cards-template';

export const Homepage: FC<HomepageProps> = ({
  title,
  result: { productsData: products, error, loading },
  callbackProductAdded,
}: HomepageProps): JSX.Element => {
  return (
    <div>
      {title && <h3>{title}</h3>}

      {/* Loading bar rendering while trying to retrieve the product list */}
      {loading && <div>loading...</div>}

      {/* If the products list is available render it in the template */}
      {products && (
        <ProductCardsTemplate
          {...{
            title: title ?? '',
            products,
            onProductCardClick: callbackProductAdded,
          }}
        />
      )}

      {/* If there has been an error during the API call render the error message */}
      {error && <p>{error}</p>}
    </div>
  );
};
export default Homepage;
