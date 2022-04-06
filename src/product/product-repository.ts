import { map } from "rxjs";
import { ProductDataSource } from "./product-data-source";
import Product from "./product.model";

class ProductRepository {
  private productAPI: ProductDataSource;
  constructor(productAPI: ProductDataSource) {
    this.productAPI = productAPI;
  }

  getProducts = () => {
    return this.productAPI.getProducts().pipe(
      map((data) => {
        // const product = new Product({
        //   id: data.id,
        //   imageSrc: data.imageSrc,
        //   imageAlt: data.imageAlt,
        //   price: data.price,
        //   color: data.color,
        //   name: data.name,
        // });
        console.log(data);

        // return { product };
      })
    );
  };
}

export default ProductRepository;
