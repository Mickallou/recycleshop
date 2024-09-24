import React from 'react'
import { useNavigate } from 'react-router-dom'; 

const Card = ({data}) => {
    const navigate = useNavigate();

    const handleClickedCard = () => {
        window.scrollTo(0, 0);
        return navigate(`/cards/${data._id}`);
    };

    return (
        <div>
            <div className="card p-2" key={data._id}>
                <img src={data.image.url[0]} className="card-img-top" alt={data.image.alt} />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                    <p className="card-text">{data.price}$</p>
                </div>
                <button onClick={handleClickedCard}>More details</button>
            </div>
        </div>
    )
}

export default Card
