type ProductProps = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  productAdded?: () => void;
};

export default ProductProps;
