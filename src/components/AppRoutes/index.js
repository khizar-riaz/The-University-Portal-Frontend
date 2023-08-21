import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../../pages/Home';
import StudentLogin from '../../pages/studentLogin';
import StudentSignup from '../../pages/studentSignup';
import StudentDashboard from '../../pages/studentDashboard';
import StudenceAttendence from '../../pages/StudentAttendence'
import StudenceResult from '../../pages/StudentResult'
import StudentCourses from '../../pages/StudentCourses'
import StudentDefault from '../../pages/StudentDefault'

function AppRoutes() {
  return (
    <div>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/student/login" element={<StudentLogin />} />  
        <Route exact path="/student/signup" element={<StudentSignup />} />  
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />  
        <Route exact path="/student/attendence" element={<StudenceAttendence />} />  
        <Route exact path="/student/result" element={<StudenceResult />} />  
        <Route exact path="/student/courses" element={<StudentCourses />} />  
        <Route exact path="/student/default" element={<StudentDefault />} />  
    </Routes>
    </div>
    
  );
}
export default AppRoutes;