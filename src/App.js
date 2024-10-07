import { createContext, useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import Router from './Router';

export const GeneralContext = createContext();

function App() {
  const [details, setDetails] = useState(false);
  const [data, setData] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1601/products')
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => {
            toast.error(error.response.data.message)
        })
}, [])

  
  return (
    <GeneralContext.Provider value={{details, data, setDetails, setData, products}}>
      <Navbar />
      <Router />
    </GeneralContext.Provider>
  );
}

export default App;
