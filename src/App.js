import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./app.css";
import AllCryptos from "./Components/AllCryptos/AllCryptos";
import CryptoDetails from "./Components/CryptoDetails/CryptoDetails";
function App() {
  return (
    <>
      <Sidebar />
      <div className="wrapper">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Lab/:name/:id/" element={<CryptoDetails />} />
            <Route path="/Crypto/All" element={<AllCryptos />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
