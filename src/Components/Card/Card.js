import React, { useContext } from 'react';
import { GeneralContext } from '../../App';

const Card = ({ data }) => {
    const { setDetails, setData } = useContext(GeneralContext);

    const handleClickedCard = () => {
        setData(data);
        setDetails(true);
    };

    return (
        <div>
                <div className="card" key={data._id}>
                    <img src={data.image.url[0]} className="card-img-top" alt={data.image.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                        <p className="card-text">{data.price}$</p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-secondary btn-sm' onClick={handleClickedCard}>More details</button>
                    </div>
                </div>
        </div>
    );
};

export default Card;
