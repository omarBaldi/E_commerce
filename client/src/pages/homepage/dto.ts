import { Product } from '../../molecules/product-card/dto';

type HomepageProps = {
  title?: string;
  products: Product[];
  callbackProductAdded?: any;
};

export default HomepageProps;
