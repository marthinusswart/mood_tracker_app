import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import MoodDetail from "./components/MoodDetail";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add_mood" element={<MoodDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/**
 * 
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
 */
