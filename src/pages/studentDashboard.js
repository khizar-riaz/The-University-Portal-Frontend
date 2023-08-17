import React from "react";
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import SideMenu from '../components/SideMenu'
import ContentPage from '../components/ContentPage'
function StudentDashboard() {
  return (
     <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <ContentPage></ContentPage>
      </div>
      <AppFooter />
    </div>
  );
}

export default StudentDashboard;
