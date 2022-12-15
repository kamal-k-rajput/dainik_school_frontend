import "./App.css";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
// import { config } from "dotenv";
// config();
function App() {
  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  );
}

export default App;
