import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPane from "./components/MainPane";
import MoreContent from "./components/MoreContent";

function App() {
  return (
    <Router>
      <div className="mb-4">
        <Routes>
          <Route path="/" exact element={<MainPane />} />
          <Route path="/more" exact element={<MoreContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
