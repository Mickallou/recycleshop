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
                <div className='oneCardHeader d-flex justify-content-center gap-5'>
                    {product.image && product.image.url && product.image.url.length > 0 ? (
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                {product.image.url.map((image, index) => (
                                    <div className={`carousel-item active`}>
                                        <img src={image} alt={image.alt} />
                                    </div>
                                ))}     
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
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
