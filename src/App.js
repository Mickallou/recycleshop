import { createContext } from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

export const GeneralContext = createContext();

function App() {
  return (
    <GeneralContext.Provider value={{}}>
      <Navbar />
      <Home />
    </GeneralContext.Provider>
  );
}

export default App;
