import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';

function App() {
  return (
   
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/Cart' element={<Cart />}/>
     </Routes>
     </BrowserRouter>
    
    
  );
}

export default App;
