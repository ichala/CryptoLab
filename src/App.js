import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <Sidebar />
      <div className="wrapper"> 
      <div className="content-wrapper">
        <Routes>

          <Route path="/" element={<Home/>} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
