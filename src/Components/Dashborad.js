import { useEffect, useState } from "react";
import { MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import dataGallery from './data.json'; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import './css-components/dashboard.css'
import swal from 'sweetalert';

function Dashboard() {
    // Initialize state with data from JSON file
    const [products, setProducts] = useState(dataGallery);
    const navigate = useNavigate();


    const handleDelete = async (id) => {
        const result = await swal({
            title: 'Are you sure?',
            text: 'This item will be deleted',
            icon: 'warning',
            buttons: {
                cancel: {
                    text: 'Cancel',
                    value: null,
                    visible: true,
                    className: '',
                    closeModal: true,
                },
                confirm: {
                    text: 'Confirm',
                    value: true,
                    visible: true,
                    className: '',
                    closeModal: true,
                },
            },
            dangerMode: true,
        });

        if (result) {
            // Filter out the product with the specified id
            const updatedProducts = products.filter(product => product.id !== id);
            setProducts(updatedProducts); // Update state with the new array
            swal('Item deleted successfully', {
                icon: 'success',
            });
        }
    };
    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.newProduct) {
            setProducts([...products, location.state.newProduct]);
        }
    }, [location.state]);
    const handleEdit = (id, newTitle) => {
        // Prompt user to enter a new title
        swal({
            text: 'Edit Product Title:',
            content: "input",
            button: {
                text: "Save",
                closeModal: true,
            },
        }).then((newTitle) => {
            if (newTitle) {
                // Update the product title in the state
                const updatedProducts = products.map(product =>
                    product.id === id ? { ...product, title: newTitle } : product
                );
                setProducts(updatedProducts); // Update state with the modified array
                swal('Title updated successfully', {
                    icon: 'success',
                });
            }
        });
    };


    return (
        <div className="dashboard"> 
            <button className="orange-btn" onClick={() => window.location.href = '/addNew'}>Add new product</button>
            <div className="table-container">
                <MDBTable hover borderless cellPadding={5} className="table">
                    <MDBTableHead className="table-head">
                        <tr className="tr tr-head">
                            <th scope='col'>Product</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Rate</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Control</th>
                            
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {products.map((product, index) => (
                            <tr key={index} className="tr">
                                <td><img src={product.image} alt="image" className="product-img"/></td>
                                <td>{product.title.slice(0, 15)}</td>
                                <td>{product.category}</td>
                                <td>${product.price}</td>
                                <td>{product.rating.rate}</td>
                                <td>{product.rating.count}</td>
                                <td>
                                    <button onClick={() => handleEdit(product.id, product.title)} style={{border:"none", backgroundColor:"white"}}>
                                    <MDBIcon fas icon="pen" style={{ color: '#3d9635'}} />
                                    </button>
                                    <button onClick={() => handleDelete(product.id)} style={{border:"none", backgroundColor:"white"}}>
                                    <MDBIcon far icon="trash-alt" style={{ color: '#d6534a' }} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>               
            </div>
        </div>
    );
}

export default Dashboard;
