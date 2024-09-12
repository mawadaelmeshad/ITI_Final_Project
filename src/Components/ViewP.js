import { useEffect, useState } from 'react';
import './css-components/view.css'

const ViewP = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details">
        <div className='data'>
            <h1>{product.title}</h1>
            <p><span>Description: </span>{product.description}</p>
            <p><span>Price: </span> {product.price}$</p>
            <p><span>Category: </span> {product.category}</p>
            <p><span>Rating: </span>{product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
        <div className='img'>
            <img src={product.image} alt={product.title} />
        </div>
    </div>
  );
};

export default ViewP;
