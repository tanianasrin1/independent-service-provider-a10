import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/About/About/About';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path = "/" element= {<Home></Home>}></Route>
        <Route path = "/home" element= {<Home></Home>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
        <Route path = "/login" element = {<Login></Login>}></Route>
        <Route path = "*" element = {<NotFound></NotFound>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
