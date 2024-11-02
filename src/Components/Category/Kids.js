import React, { useContext } from 'react';
import '../Home/Home.css';
import Card from '../Card/Card';
import { GeneralContext } from '../../App';
import OneCard from '../Card/OneCard';
import pubKids from '../../images/pubKids.webp';

const Kids = () => {
    const { details, data, products } = useContext(GeneralContext); 

    return (
        <div>
            {details && data ? <OneCard data={data}/> : null}
            <div className="divImg">
                <img src={pubKids} alt="pubKids" className="img" />
            </div>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
                {products.filter(product => product.category === "Kids" && product.sold === false).map(product => ( 
                    <Card key={product._id} data={product} />
                ))}
            </div>
        </div>
    );
}

export default Kids
