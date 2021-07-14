import { FC, useEffect, useState } from 'react';
import API from '../../API';
import { ProductCard } from '../../molecules/product-card/product-card';
import ProductCardProps from '../../molecules/product-card/dto';

export const Homepage: FC<{}> = (): JSX.Element => {
  const [APIState, setAPIState] = useState<{
    productsData: ProductCardProps[];
    error: string;
    loading: boolean;
  }>({
    productsData: [],
    error: '',
    loading: false,
  });

  const updateAPIState = (
    key: string,
    value: boolean | ProductCardProps[] | string
  ): void => {
    setAPIState((prevAPIState) => ({
      ...prevAPIState,
      [key]: value,
    }));
  };

  useEffect(() => {
    (async (): Promise<any> => {
      updateAPIState('loading', true);

      try {
        const productsRetrieved = await API.retrieveProducts();
        updateAPIState('productsData', productsRetrieved);
      } catch (error) {
        updateAPIState('error', error.message);
      } finally {
        updateAPIState('loading', false);
      }
    })();
  }, []);

  return (
    <div>
      {APIState.error && <div>Oops! Something went wrong!</div>}
      {APIState.loading && <div>Loading...</div>}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '3rem',
        }}
      >
        {APIState.productsData.map((currentProduct, _) => {
          return <ProductCard key={currentProduct.id} {...currentProduct} />;
        })}
      </div>
    </div>
  );
};
export default Homepage;
