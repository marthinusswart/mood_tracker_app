import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
