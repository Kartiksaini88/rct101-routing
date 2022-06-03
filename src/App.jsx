import logo from './logo.svg';
import './App.css';
import { Products } from './components/Products';
import { Productdetail } from './components/Productdetail';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/navbar';
import { ReqAuth } from './components/protected';
import { Login } from './components/login';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/product' element={<ReqAuth><Products/></ReqAuth>}/>
        <Route path='/product:id' element={<ReqAuth><Productdetail/></ReqAuth>}/>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

        

      
    </div>
  );
}

export default App;
