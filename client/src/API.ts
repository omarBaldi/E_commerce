import axios from 'axios';
import ProductCardProps from './molecules/product-card/dto';

class APICalls {
  baseURL: string;
  constructor() {
    this.baseURL = 'https://fakestoreapi.com/products';
  }
  async retrieveProducts(): Promise<ProductCardProps[]> {
    try {
      const { data: products } = await axios({
        method: 'GET',
        url: this.baseURL,
      });
      return products ?? [];
    } catch (error) {
      throw new Error('Unable to retrieve products from API.');
    }
  }
  async retrieveSingleProduct(ID: string): Promise<ProductCardProps> {
    try {
      const { data: productInfo } = await axios({
        method: 'GET',
        url: `${this.baseURL}/${ID}`,
      });
      return productInfo;
    } catch (error) {
      throw new Error(`Unable to retrieve product with ID ${ID}`);
    }
  }
}

const API = new APICalls();
export default API;
