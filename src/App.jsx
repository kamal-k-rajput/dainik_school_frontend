import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LogOut } from "./components/LogOut";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { Home } from "./components/Home/Home";
import { Courses } from "./components/Courses/Courses";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
import { ContactUs } from "./components/Contact/ContactUs";
import { Feedback } from "./components/Feedback/Feedback";
import { About } from "./components/About/About";
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
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
