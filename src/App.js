import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import StudentLogin from './pages/studentLogin';
import StudentSignup from './pages/studentSignup';
import StudentDashboard from './pages/studentDashboard';
// import Dashboard from "./components/Dashboard";
// import Results from "./components/Results";
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/student/login" element={<StudentLogin />} />  
        <Route exact path="/student/signup" element={<StudentSignup />} />  
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />  
        {/* <Route path="/" element={<Dashboard />} />
        <Route path="/results" element={<Results />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
