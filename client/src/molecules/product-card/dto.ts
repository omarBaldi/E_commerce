export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type ProductCardProps = Product & {
  productAdded?: (productData: Product) => void;
};

export default ProductCardProps;
