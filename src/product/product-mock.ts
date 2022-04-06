import { of } from "rxjs";
import { ProductDataSource } from "./product-data-source";

class ProductMOCK implements ProductDataSource {
  getProducts = () => {
    return of([
      {
        id: "1",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/0901/4730/products/super_soft_black_with_navy_pocket_1600x.jpg?v=1527599147",
        imageAlt: "Men black shirt",
        price: 100,
        color: "Black",
        name: "Product 1",
      },
      {
        id: "2",
        imageSrc:
          "https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg",
        imageAlt: "Men white shirt",
        price: 80,
        color: "White",
        name: "Product 2",
      },
    ]);
  };
}

export default ProductMOCK;
