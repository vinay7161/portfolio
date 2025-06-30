import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import AboutMePage from "../Page/AboutMePage";
import ContactMePage from "../Page/ContactMePage";
import ProjectPage from "../Page/ProjectPage";
import SkillPage from "../Page/SkillPage";
import ScrollToTop from "../components/Scrolltotop/ScrollToTop";
  

const AppRouter = () => {
  
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
