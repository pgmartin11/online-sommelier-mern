import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TimerProvider from "./components/timers/TimerProvider";
import NewTimer from "./components/timers/NewTimer";
import EditTimer from "./components/timers/EditTimer";
import WorkoutView from "./views/WorkoutView";
import DocumentationView from "./views/DocumentationView";
import HistoryView from "./views/HistoryView";
import CompilationView from "./views/CompilationView";
import ReviewDetail from "./views/ReviewDetail";
import { PATHS } from "./constants";


const Header = () => (
    <div id="hero_image">
      <div id="hero_title">
        <h1>The Online Sommelier</h1>
        <h4>Your Resource for All Things Wine</h4>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <div className="pipe">|</div>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
);


const App = () => {
  return (
    <Router basename="/">
      <TimerProvider>
        <Header />
        <div className="main_wrapper">
          <Routes>
            <Route path={PATHS.HOME} element={<CompilationView />} />
            <Route path={PATHS.DELETE()} element={<ReviewDetail />} />
            <Route path="*" element={<Navigate to={PATHS.HOME} />} />
          </Routes>
        </div>
      </TimerProvider>
    </Router>
  );
};

export default App;
