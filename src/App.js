import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Contact from "./pages/Contackts/Contact";
import Favorits from "./pages/Favorits/Favorits";
import Order from "./pages/Order/Order";
import Profile from "./pages/Profile/Profile";
import Backet from "./pages/bascket/Backet";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";


function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='favorites' element={<Favorits/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='basket' element={<Backet/>}/>
        </Route>
        <Route path='login' element={<LogIn/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>


    </>
  );
}

export default App;
