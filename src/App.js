import { Navbar, Social, Singleblog, SingleNews } from "./Components";
import { Home } from "./Pages";
import { AllBlogs, AllNews, Allphotos, AllVideos } from "./SubPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/app.scss";
import ScrollToTop from "./ScrollTop/ScrollToTop";
import { useState } from "react";
import ExtraAbout from "./Pages/ExtraAbout";
import Seminar from "./Components/Seminar";

function App() {
  const [singleBlog, setSingleBlog] = useState("");
  const [singleNews, setSingleNews] = useState("");
  const [singleExpo, setSingleExpo] = useState("");
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Social />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                singleBlog={singleBlog}
                setSingleBlog={setSingleBlog}
                singleNews={singleNews}
                setSingleNews={setSingleNews}
                setSingleExpo={setSingleExpo}
              />
            }
          ></Route>
          <Route path="/seminars" element={<Seminar singleExpo={singleExpo}/>}></Route>
          <Route path="/extrabout" element={<ExtraAbout />}></Route>
          <Route path="/allphotos" element={<Allphotos />}></Route>
          <Route path="/allvideos" element={<AllVideos />}></Route>
          <Route
            path="/allnews"
            element={<AllNews setSingleNews={setSingleNews} />}
          ></Route>
          <Route
            path="/allblogs"
            element={<AllBlogs setSingleBlog={setSingleBlog} />}
          ></Route>
          <Route
            path="/singlenews"
            element={<SingleNews singleNews={singleNews} />}
          ></Route>
          <Route
            path="/singleblog"
            element={<Singleblog singleBlog={singleBlog} />}
          ></Route>
        </Routes>

        <p className="footerCopy">© S A Sarwar. 2023</p>
      </Router>
    </div>
  );
}

export default App;
