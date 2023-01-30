import React from 'react';
import UniImage from '../../assets/Footer/Image 1.png';
import instaImage from '../../assets/Footer/Layer 2.png';
import './index.scss';

export default function index() {
  return (
    <footer className="footer">
      {/* <hr> tag was only displayed on the mobile version --------
      on the desktop version, border-right was used as the separator (with :not-last-child) */}
      <nav>
        <span>contact us</span>
        <hr />
        <span>faq</span>
        <hr />
        <span>site map</span>
        <hr />
        <span>privacy policy</span>
        <hr />
        <span>cookies policy</span>
        <hr />
        <span>legal notice</span>
      </nav>
      <section>
        <img alt="unilabs icon" src={UniImage} />
        <a target="_blank" href="https://www.instagram.com/intibiome/" rel="noreferrer"><img alt="intagram icon" src={instaImage} /></a>
      </section>
    </footer>
  );
}
