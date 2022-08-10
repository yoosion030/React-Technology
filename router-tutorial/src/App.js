import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Profile />} path="/profile/:username" />
    </Routes>
  );
}

export default App;
