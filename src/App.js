import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Album from "./components/album";
import Tour from "./components/tour";
import Profile from "./components/profile";
import Errorpage from "./components/error";
import Login from "./components/login/login";
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "./components/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Album" element={<Album />} />
        <Route path="/Tour" element={<Tour />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/Profile" element={<Profile />} />
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
