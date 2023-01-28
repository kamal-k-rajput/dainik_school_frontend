import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LogOut } from "./components/LogOut";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { Home } from "./components/Home/Home";
import { Courses } from "./components/Courses/Courses";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
// import { config } from "dotenv";
// config();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
