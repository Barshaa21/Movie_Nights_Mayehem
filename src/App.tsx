import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";

// import Loader from "./Loader";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />

          {/* Login */}
          {/* <Route path="login" element={<LoginAuth />} />
          <Route path="logout" element={<Logout />} />
          <Route path="signup" element={<SignupAuth />} />
          <Route path="/forgetpw" element={<ForgetPw />} />
          <Route path="/reset" element={<Reset />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
