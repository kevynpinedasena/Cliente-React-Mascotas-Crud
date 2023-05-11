import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Principal } from "./components/Pages/Principal/Principal";
import { ApiMascotas } from "./components/Pages/ApiMascotas/ApiMascotas";
import { NotFound } from "./components/Pages/NotFound/NotFound";
import { FooterHome } from "./components/Layouts/FooterHome/FooterHome";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='contenedor'>
      <Home />
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/Principal" element={<Principal/>} />
        <Route path="/ApiMascotas" element={<ApiMascotas />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <FooterHome />
    </div>
  );
}

export default App;
