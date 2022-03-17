import React, { useState } from 'react';
import Navigation from "./Navigation";
import AboutMe from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

function Main() {
  const [currentTab, handleTabChange] = useState("About");

  const renderTabs = () => {
    switch (currentTab) {
      case "About":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Contact Me":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div style={{width: '100%'}}>
      <Navigation
        currentPage={currentTab}
        handlePageChange={handleTabChange}
      />
      <div style={{width: '90%', margin: '0 auto', minHeight: '90vh'}}>
      <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/MeenaAlemiJalal?tab=repositories"
          >
            <span className="title">Meena Alemi Jalal</span>
          </a>
        </div>
        <div style={{width: '100%'}}>{renderTabs(currentTab)}</div>
      </div>
    </div>
  );
}

export default Main;
