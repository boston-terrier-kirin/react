import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:5000/books');
      setProducts(res.data);
    };

    getProducts();
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
