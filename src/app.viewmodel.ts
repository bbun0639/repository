import { useEffect, useMemo, useState } from "react";
import ProductAPI from "./product/product-api";
import ProductMOCK from "./product/product-mock";
import ProductRepository from "./product/product-repository";
import Product from "./product/product.model";

const useViewModel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentTab, setCurrentTab] = useState("api");

  const tabs = useMemo(
    () => [
      {
        name: "API",
        value: "api",
      },
      {
        name: "Localstorage",
        value: "localstorage",
      },
      {
        name: "Mock",
        value: "mock",
      },
    ],
    []
  );

  useEffect(() => {
    // const productAPI = new ProductAPI();
    const productMOCK = new ProductMOCK();
    const productRepository = new ProductRepository(productMOCK);

    const subscription = productRepository.getProducts().subscribe((data) => {
      // setProducts(data.product);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { products, currentTab, setCurrentTab, tabs };
};

export default useViewModel;
