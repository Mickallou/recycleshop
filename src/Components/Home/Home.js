import React, { useContext } from 'react';
import './Home.css';
import pubHome from '../../images/pub-home.jpeg';
import Card from '../Card/Card';
import { GeneralContext } from '../../App';
import OneCard from '../Card/OneCard';

const Home = () => {
    const { details, data, products } = useContext(GeneralContext);

    return (
        <div>
            {details && data ? <OneCard data={data} /> : null}
            <div className="divImg">
                <img src={pubHome} alt='pubHome' />
            </div>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
                    {products.filter(product => product.sold === false).map(product => (
                        <Card key={product._id} data={product} />
                    ))}
            </div>
        </div>
    );
};

export default Home;
