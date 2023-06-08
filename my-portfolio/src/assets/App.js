import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import ProjectsDisplay from './component/ProjectsDisplay';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
