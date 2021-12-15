import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import AddContact from "./component/AddContact";
import EditContact from "./component/EditContact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";



const App=()=> {
  return (
    <div className="App"> 
    <ToastContainer/>
    {/* <Header/>  */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/add" element={<AddContact/>} />

      <Route path="/edit/:id" element={<EditContact/>} />

          {/* <Route path="/" element={<ProductListing/>}/>
          <Route path="/product/:productId" element={<ProductDetails/>}/>*/}
      </Routes>
    </div>  
  ); 
}

export default App;
