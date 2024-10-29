import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// components
import Home from "./components/Home";

import Loader from "./Loader";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";

function App() {
  const [Loading, setLoading] = useState(true);
  const apiKey = "b09801335a6316ac2ec98b2dfec3e9ce";
  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    axios
      .get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
      .then((response) => {
        console.log("templateId", response.data.result.template_id);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

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
