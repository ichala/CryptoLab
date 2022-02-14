import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import './app.css'
import AllCryptos from "./Components/AllCryptos/AllCryptos";
function App() {
  return (
    <>
    
      <Sidebar />
      <div className="wrapper" > 
      <div className="content-wrapper">
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/Crypto/All" element={<AllCryptos/>} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
