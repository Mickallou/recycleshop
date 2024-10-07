import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GeneralContext } from '../../App'

const OneCard = ({ data }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { setDetails } = useContext(GeneralContext);

    useEffect(() => {
        axios.get(`http://localhost:1601/products/${data._id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false); 
            })
            .catch(error => {
                toast.error(error.response.data.message);
                setLoading(false);
            });
    }, [data._id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='oneCardContainer'>
            <div className="oneCard " key={product._id}>
                <div className='closeButton'>
                    <button className='btn btn-secondary btn-sm' onClick={() => setDetails(false)}>X</button>
                </div>
                <div className='oneCardHeader d-flex justify-content-center gap-4'>
                    {product.image && product.image.url && product.image.url.length > 0 ? (
                        <img src={product.image.url[0]} className="card-img-top" alt={product.image.alt || 'Product image'} />
                    ) : (
                        <div>No image available</div>
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{product.name || 'No name available'}</h5>
                        <p className="card-text">{product.description || 'No description available'}</p>
                        <p className="card-text">{product.price ? `${product.price}$` : 'No price available'}</p>
                    </div>
                </div>
                <div className='oneCardFooter'>
                    <button className='btn btn-secondary btn-sm'>Back</button>
                </div>
            </div>

        </div>
    );
};

export default OneCard;
