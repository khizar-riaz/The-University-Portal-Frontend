
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import StudentLogin from './pages/studentLogin';
import StudentSignup from './pages/studentSignup';
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/student/login" element={<StudentLogin />} />  
        <Route exact path="/student/signup" element={<StudentSignup />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
