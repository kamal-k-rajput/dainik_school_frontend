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
import "./App.css";
import { LiveClasses } from "./components/Courses/LiveClasses/LiveClasses";
import { Library } from "./components/Library/Library";
import { Classes } from "./components/Courses/Classes/Classes";
import { PreviousYearQuestions } from "./components/Courses/PreviousYearQuestions/PreviousYearQuestions";
import { FreeCourses } from "./components/Courses/FreeCourses/FreeCourses";
import { Faculty } from "./components/Faculty/Faculty";
import { PracticeSession } from "./components/PracticeSession/PracticeSession";
import { NewsAndBlogs } from "./components/NewsNblogs/NewsAndBlogs";
import { DrivingLicense } from "./components/DrivingLicense/DrivingLicense";

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
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/library" element={<Library />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/free-courses" element={<FreeCourses />} />
          <Route path="/news-and-blogs" element={<NewsAndBlogs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/practice-session" element={<PracticeSession />} />
          <Route path="/license" element={<DrivingLicense />} />
          <Route path="/educator-policy" element={<About />} />
          <Route
            path="/previous-year-question-paper"
            element={<PreviousYearQuestions />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
