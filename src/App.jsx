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
import { LiveClasses } from "./components/Courses/LiveClasses/LiveClasses";
import { Library } from "./components/Library/Library";
import { Classes } from "./components/Courses/Classes/Classes";
import { PreviousYearQuestions } from "./components/Courses/PreviousYearQuestions/PreviousYearQuestions";
import { FreeCourses } from "./components/Courses/FreeCourses/FreeCourses";
import { Faculty } from "./components/Faculty/Faculty";
import { PracticeSession } from "./components/PracticeSession/PracticeSession";
import { NewsAndBlogs } from "./components/NewsNblogs/NewsAndBlogs";
import { DrivingLicense } from "./components/DrivingLicense/DrivingLicense";
import { AboutUs } from "./components/About/AboutUs";
import { EducatorPolicy } from "./components/Others/EducatorPolicy";
import { ReturnPolicy } from "./components/PrivacyPolicy/ReturnPolicy";
import { TermAndCondition } from "./components/PrivacyPolicy/TermAndCondition";
import { Subject } from "./components/Subject/Subject";
import { Test } from "./components/Test/Test";
import { Quiz } from "./components/Quiz/Quiz";
import "./App.css";
import { StudentRegistration } from "./components/RegistrationForm/StudentRegistration";
import { UploadVideo } from "./components/Tools/UploadVideo/UploadVideo";
import { Profile } from "./components/user/Profile";
import { AdminProfile } from "./components/Admin/AdminProfile";
import { Dashboard } from "./components/Admin/Dashboard";
import { Blog } from "./components/NewsNblogs/Blog";
import { YoutubeVideo } from "./components/Tools/YoutubeVideo";
import { CourseDetails } from "./components/Courses/CourseBox/CourseDetails/CourseDetails";
import { MathCourseDetails } from "./components/Courses/CourseBox/CourseDetails/MathCourseDetails";
import { ScienceCourseDetails } from "./components/Courses/CourseBox/CourseDetails/ScienceCourseDetails";

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
          <Route path="/apply-now" element={<Register />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/library" element={<Library />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/free-courses" element={<FreeCourses />} />
          <Route path="/news-and-blogs" element={<NewsAndBlogs />} />
          <Route path="/news-and-blogs/:id" element={<Blog />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/practice-session" element={<PracticeSession />} />
          <Route path="/license" element={<DrivingLicense />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/educator-policy" element={<EducatorPolicy />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/test" element={<Test />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/refund-policy" element={<ReturnPolicy />} />
          <Route path="/term-of-use" element={<TermAndCondition />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/upload-video" element={<UploadVideo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses/Maths" element={<MathCourseDetails />} />
          <Route path="/courses/Science" element={<ScienceCourseDetails />} />
          <Route
            path="/youtubeVideo"
            element={<YoutubeVideo props={{ link: "aWQ7FqkvnT4" }} />}
          />
          <Route
            path="/student-registration"
            element={<StudentRegistration />}
          />

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
