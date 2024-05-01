import Registration from "./pages/registration/Registration";
import GenrePage from "./pages/genre/GenrePage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from "./pages/homePage/HomePage";
import Dashboard from "./pages/dashboard/Dashboard"
import Promotion from "./pages/promotion/Promotion";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration/>} />
          <Route path="/genre" element={<GenrePage/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/promotion" element={<Promotion/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
