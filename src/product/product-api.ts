import { ProductDataSource } from "./product-data-source";
import Rxios from "../common/rxios/rxios";

class ProductAPI implements ProductDataSource {
  http: Rxios;

  constructor() {
    this.http = new Rxios({
      baseURL: "https://enoxu95j76xgklv.m.pipedream.net/",
    });
  }

  getProducts = () => {
    return this.http.get<
      {
        id: string;
        imageSrc: string;
        imageAlt: string;
        price: number;
        color: string;
        name: string;
      }[]
    >("/");
  };
}

export default ProductAPI;
