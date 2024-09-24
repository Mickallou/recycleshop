import React, {useContext} from 'react'
import './Home.css'
import pubHome from '../../images/pub-home.jpeg'
import { GeneralContext } from '../../App'
import Card from '../Card/Card'


const Home = () => {
    const { products } = useContext(GeneralContext);
        
    return (
        <div>
            <div className="divImg">
                <img src={pubHome} alt='pubHome' />
            </div>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
                    {products.map(product => (
                        <Card key={product._id} data={product} />
                    ))}
            </div>
        </div>
    )
}

export default Home
