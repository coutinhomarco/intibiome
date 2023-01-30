/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import MobileMenu from '../MobileMenu';
import './index.scss';

export default function SandwichMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const onMenuClick = () => {
    setIsOpen(!isOpen);
    const menu = document.querySelector('.sandwich-menu');
    menu.classList.toggle('change');
  };
  return (
    <div className="sandwich-container">
      {
        isOpen ? (
          <>
            <div onClick={() => onMenuClick(this)} className="sandwich-menu">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
            <MobileMenu setIsOpen={setIsOpen} />
          </>
        ) : (
          <div onClick={() => onMenuClick(this)} className="sandwich-menu">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        )
    }

    </div>

  );
}
