"use client"

import React, { useEffect, useRef, useState } from 'react';
import '../slides.css'; // Assuming this contains your custom CSS
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const FullpageComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (section) => {
    setIsMenuOpen(false);
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
    let isThrottled = false;
    let startY = 0;
    let isDragging = false;

    const scrollToSection = (index) => {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = (event) => {
      if (isThrottled) return;

      const deltaY = event.deltaY;

      if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
      } else if (deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
        scrollToSection(currentSectionIndex);
      }

      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 600); // Reduce delay for quicker responsiveness
    };

    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
      isDragging = true;
    };

    const handleTouchMove = (event) => {
      const currentY = event.touches[0].clientY;
      const deltaY = startY - currentY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
          scrollToSection(currentSectionIndex);
        } else if (deltaY < 0 && currentSectionIndex > 0) {
          currentSectionIndex--;
          scrollToSection(currentSectionIndex);
        }

        isDragging = false;
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 600); // Match with scroll delay
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative bg-zinc-950">
      <Navbar onMenuClick={handleMenuClick} />
      <SideMenu
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        onSectionClick={handleSectionClick}
      />
      <div className="fullpage-container">
        <div ref={sectionRefs.home} className="section">
          <SectionOne />
        </div>
        <div ref={sectionRefs.section2} className="section">
          <SectionTwo />
        </div>
        <div ref={sectionRefs.section3} className="section">
          <SectionThree />
        </div>
        {/* Add more sections here as needed */}
      </div>
    </div>
  );
};

export default FullpageComponent;