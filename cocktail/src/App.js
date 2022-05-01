import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav'
import About from './Component/About';
import Search from './Component/searchbar';
import Cocktail from './Component/cocktail';
import {ItemProvider} from './Component/Context/ItemProvider'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import SingleComponent from './Component/SingleComponent';

function App() {
  return (
    <ItemProvider>
    <BrowserRouter >
       <Nav></Nav>
      {/* <SingleComponent></SingleComponent> */}
       <Routes>
            <Route path="/" element={<Cocktail></Cocktail>}></Route>
           <Route path="/about" element={<About></About>}>
           </Route>
           <Route path="/cocktail/:id" element={<SingleComponent></SingleComponent>}></Route>
       </Routes>


    </BrowserRouter>
    </ItemProvider>
  );
}

export default App;
