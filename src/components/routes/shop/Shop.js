import { useContext } from "react";
import { ProductsContext } from "../../context/products";
import ProductCard from "../../products-card/product-card";
import "./shop.styles.scss";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
