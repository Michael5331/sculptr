import "bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import MainPage from "./MainPage";
import "./styles.css";
import AboutUs from "./AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />

        <Routes>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
