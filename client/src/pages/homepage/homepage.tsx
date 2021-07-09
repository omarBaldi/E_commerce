import { FC, useEffect, useState } from 'react';
import API from '../../API';

export const Homepage: FC<{}> = (): JSX.Element => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const productsRetrieved = await API.retrieveProducts();
      productsRetrieved ? setProducts(productsRetrieved) : setError(true);
    })();
  }, []);

  return (
    <div>
      {products.map((currentProduct, _) => {
        return (
          <div key={currentProduct.id}>
            <p>{currentProduct.category}</p>
            <p>{currentProduct.description}</p>
            <p>{currentProduct.price}</p>
            <p>{currentProduct.title}</p>
            <img src={currentProduct.image} alt='' />
          </div>
        );
      })}
    </div>
  );
};
export default Homepage;
