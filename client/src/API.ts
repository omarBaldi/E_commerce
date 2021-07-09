import axios from 'axios';

class APICalls {
  baseURL: string;
  constructor() {
    this.baseURL = 'https://fakestoreapi.com/products';
  }
  async retrieveProducts(): Promise<any[] | null> {
    try {
      const { data: products } = await axios({
        method: 'GET',
        url: this.baseURL,
      });
      return products;
    } catch (error) {
      return null;
    }
  }
}

const API = new APICalls();
export default API;
