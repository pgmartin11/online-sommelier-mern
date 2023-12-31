import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import CompilationView from "./views/CompilationView";
import HomeView from "./views/HomeView";
import ReviewDetail from "./components/ReviewDetail";
import { PATHS } from "./constants";


const Header = () => (
    <div id="hero_image">
      <div id="hero_title">
        <h1>The Online Sommelier</h1>
        <h4>Your Resource for All Things Wine</h4>
        <nav>
          <ul>
            <li>
              <Link to={PATHS.HOME}>Home</Link>
              <div className="pipe">|</div>
            </li>
            <li>
              <Link to={PATHS.LIST}>Reviews</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
);


const App = () => {
  return (
    <Router basename="/">
      <Header />
      <div className="main_wrapper">
        <Routes>
          <Route path={PATHS.HOME} element={<HomeView />} />
          <Route path={PATHS.LIST} element={<CompilationView />} />
          <Route path={PATHS.UPDATE()} element={<ReviewDetail />} />
          <Route path={PATHS.DELETE()} element={<ReviewDetail />} />
          <Route path="*" element={<Navigate to={PATHS.HOME} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
