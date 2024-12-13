import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={styles.loading}>Yüklənir...</div>;
  }

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={product.thumbnail} alt={product.title} className={styles.image} />
            <div className={styles.buttons}>
              <button className={styles.button}>Səbətə At</button>
              <button className={styles.button}>Sevimlilərə Əlavə Et</button>
            </div>
          </div>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.price}>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
