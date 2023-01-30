import React from 'react';
import './index.scss';

export default function index({ setIsOpen }) {
  const onAnchorClick = () => {
    setIsOpen(false);
    const menu = document.querySelector('.sandwich-menu');
    menu.classList.toggle('change');
  };
  return (
    <nav className="mobile-menu">
      <a onClick={onAnchorClick} href="#brand-philosophy">brand philosophy</a>
      <a onClick={onAnchorClick} href="#product-technology">product technology</a>
      <a onClick={onAnchorClick} href="#all-products">all products</a>
      <a onClick={onAnchorClick} href="#intibiome-wellness">intibiome wellness</a>
      <a onClick={onAnchorClick} href="#intibiome-active">intibiome active</a>
      <a onClick={onAnchorClick} href="#intibiome-agecare">intibiome agecare</a>
      <a onClick={onAnchorClick} href="#article1">article1</a>
      <a onClick={onAnchorClick} href="#article2">article2</a>
      <a onClick={onAnchorClick} href="#article3">article3</a>
      <a onClick={onAnchorClick} href="#faq">faq</a>
      <a onClick={onAnchorClick} href="#contact-us">contact us</a>
    </nav>
  );
}
