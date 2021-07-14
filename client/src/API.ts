import axios from 'axios';

class APICalls {
  baseURL: string;
  constructor() {
    this.baseURL = 'https://fakestoreapi.com/products';
  }
  async retrieveProducts(): Promise<any[]> {
    try {
      const { data: products } = await axios({
        method: 'GET',
        url: this.baseURL,
      });
      return products;
    } catch (error) {
      throw error;
    }
  }
  async retrieveSingleProduct(ID: string): Promise<any> {
    try {
      const { data: productInfo } = await axios({
        method: 'GET',
        url: `${this.baseURL}/${ID}`,
      });
      return productInfo;
    } catch (error) {
      throw error;
    }
  }
}

const API = new APICalls();
export default API;
