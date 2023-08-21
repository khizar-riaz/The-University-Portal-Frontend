import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import StudentLogin from './pages/studentLogin';
import StudentSignup from './pages/studentSignup';
import StudentDashboard from './pages/studentDashboard';
import StudenceAttendence from './pages/StudentAttendence'
import StudenceResult from './pages/StudentResult'
import StudentCourses from './pages/StudentCourses'
import StudentDefault from './pages/StudentDefault'

import AppHeader from './components/AppHeader';
import SideMenu from './components/SideMenu';
import ContentPage from './components/ContentPage';
import AppFooter from './components/AppFooter';
function App() {
  return (
    <div className="App">
       <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <ContentPage></ContentPage>
      </div>
      <AppFooter />
       {/* <Router>
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
        </Router>  */}


    </div> 
  );
}

export default App;
