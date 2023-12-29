import Navbar from './Component/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import InfoPage from './Pages/InfoPage/InfoPage';
import Selection from './Pages/InfoPage/Selection';
import Summary from './Pages/InfoPage/Summary';
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/tubewell" element={<Selection/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/tubellinfo" element={<InfoPage/>} />
        <Route path="/summary" element={<Summary/>} />
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;


