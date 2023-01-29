import React from 'react';
import UniImage from '../../assets/Footer/Image 1.png';
import instaImage from '../../assets/Footer/Layer 2.png';
import './index.scss';

export default function index() {
  return (
    <footer className="footer">
      <nav>
        <span>contact us</span>
        <span>faq</span>
        <span>site map</span>
        <span>privacy policy</span>
        <span>cookies policy</span>
        <span>legal notice</span>
      </nav>
      <section>
        <img alt="unilabs icon" src={UniImage} />
        <a target="_blank" href="https://www.instagram.com/intibiome/" rel="noreferrer"><img alt="intagram icon" src={instaImage} /></a>
      </section>
    </footer>
  );
}
