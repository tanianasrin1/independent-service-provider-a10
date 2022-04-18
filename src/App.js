import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/Login/Login/Login";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Register from "./pages/Login/Register/Register";
import Checkout from "./pages/Checkout/Checkout/Checkout";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import AboutMe from "./pages/About/About/AboutMe";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
