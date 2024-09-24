import { createContext, useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';

export const GeneralContext = createContext();

function App() {
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
    <GeneralContext.Provider value={{products}}>
      <Navbar />
      <Home />
    </GeneralContext.Provider>
  );
}

export default App;
