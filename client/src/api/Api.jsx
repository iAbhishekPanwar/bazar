import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    // "https://fakestoreapiserver.reactbd.com/products" //getting 500 rn
    "https://fakestoreapi.com/products"
  );
  return products;
}
