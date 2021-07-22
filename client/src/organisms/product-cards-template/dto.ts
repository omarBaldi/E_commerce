import { Product } from '../../molecules/product-card/dto';

type ProductCardsTemplateProps = {
  title: string;
  products: Product[];
  onProductCardClick?: any;
};

export default ProductCardsTemplateProps;
