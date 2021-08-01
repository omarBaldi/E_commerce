import { Product } from '../../molecules/product-card/dto';

export interface APIStateInterface {
  productsData: Product[];
  error: string;
  loading: boolean;
}

type HomepageProps = {
  title?: string;
  result: APIStateInterface;
  callbackProductAdded?: any;
};

export default HomepageProps;
