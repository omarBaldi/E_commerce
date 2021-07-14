import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API';

export const ShowProduct: FC<{}> = (): JSX.Element => {
  const { id: productID } = useParams<{ id: string }>();
  useEffect(() => {
    retrieveProductInformation();
  }, [productID]);

  const retrieveProductInformation = async (): Promise<any> => {
    try {
      const productInfo = await API.retrieveSingleProduct(productID);
      console.log(productInfo);
    } catch (error) {}
  };

  return <div></div>;
};
export default ShowProduct;
