import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API';
import { Product } from '../../molecules/product-card/dto';

export const ShowProduct: FC<{}> = (): JSX.Element => {
  const { id: productID } = useParams<{ id: string }>();

  const [productState, setProductState] = useState<{
    productInfo: Product | null;
    error: string;
    loading: boolean;
  }>({
    productInfo: null,
    error: '',
    loading: false,
  });

  useEffect(() => {
    retrieveProductInformation();
  }, [productID]);

  const updateAPIState = (
    key: string,
    value: Product | string | boolean
  ): void => {
    setProductState((prevProductState) => ({
      ...prevProductState,
      [key]: value,
    }));
  };

  const retrieveProductInformation = async (): Promise<void> => {
    updateAPIState('loading', true);

    try {
      const productInfo = await API.retrieveSingleProduct(productID);
      updateAPIState('productInfo', productInfo);
    } catch (error) {
      updateAPIState('error', error.message);
    } finally {
      updateAPIState('loading', false);
    }
  };

  const renderProduct = (): JSX.Element => {
    return (
      <>
        <p>{productState.productInfo?.id}</p>
        <p>{productState.productInfo?.title}</p>
        <p>{productState.productInfo?.price}</p>
        <p>{productState.productInfo?.description}</p>
        <p>{productState.productInfo?.category}</p>
        <img src={productState.productInfo?.image} alt='' />
      </>
    );
  };

  const productInfoNotEmpty: boolean = !!productState.productInfo;

  return (
    <div>
      {productState.error && <div>{productState.error}</div>}
      {productState.loading && <div>Loading...</div>}
      {productInfoNotEmpty && renderProduct()}
    </div>
  );
};
export default ShowProduct;
