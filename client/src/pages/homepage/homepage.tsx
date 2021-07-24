import { FC, useEffect, useState } from 'react';
import HomepageProps from './dto';
import API from '../../API';
import { Product } from '../../molecules/product-card/dto';
import ProductCardsTemplate from '../../organisms/product-cards-template/product-cards-template';

export const Homepage: FC<HomepageProps> = ({
  callbackProductAdded,
}: HomepageProps): JSX.Element => {
  const [APIState, setAPIState] = useState<{
    productsData: Product[];
    error: string;
    loading: boolean;
  }>({
    productsData: [],
    error: '',
    loading: false,
  });

  const updateAPIState = (
    key: string,
    value: boolean | Product[] | string
  ): void => {
    setAPIState((prevAPIState) => ({
      ...prevAPIState,
      [key]: value,
    }));
  };

  useEffect(() => {
    console.log(APIState.productsData.length);
    (async (): Promise<void> => {
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
      <ProductCardsTemplate
        {...{
          title: '',
          products: APIState.productsData,
          onProductCardClick: callbackProductAdded,
        }}
      />
    </div>
  );
};
export default Homepage;
