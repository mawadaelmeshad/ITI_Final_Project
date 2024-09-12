import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css-components/createp.css';

function CreateP({ addProduct }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [rate, setRate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newProduct = {
            id: Math.random(), // Generate a random ID for simplicity
            title,
            category,
            price: parseFloat(price),
            rating: {
                rate: parseFloat(rate),
                count: parseInt(quantity),
            },
            image
        };

        navigate('/dashboard', { state: { newProduct: newProduct } });
    };

    return (
        <div className="create-product">
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Product Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input type="number" placeholder="Rating" value={rate} onChange={(e) => setRate(e.target.value)} required />
                <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
                <button type="submit" className="orange-btn">Add Product</button>
            </form>
        </div>
    );
}

export default CreateP;
