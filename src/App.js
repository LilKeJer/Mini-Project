import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Album from "./components/album";
import Tour from "./components/tour";
import Profile from "./components/profile";
import Errorpage from "./components/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Album" element={<Album />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
