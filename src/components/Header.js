import React, { useState } from "react";
import NavTabs from "./NavTabs";

import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills"

function Header() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
   
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Skills": 
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <div>
          <h1>Rayan</h1>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
      </div>
      {
      
        renderPage(currentPage)
      }
    </div>
  );
}
export default Header;