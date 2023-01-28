import React, { useState } from 'react';
import './index.scss';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';

import headerImg from '../../assets/Header/headerImg.png';

export default function Header() {
  const [subMenuText, setSubMenuText] = useState(['']);
  const onHover = ({ target }) => {
    switch (target.text) {
      case 'about us ':
        setSubMenuText(['brand philosophy', 'product technology']);
        break;
      case 'our products ':
        setSubMenuText(['all products', 'intibiome wellness', 'intibiome active', 'intibiome agecare']);
        break;
      case 'intimate health ':
        setSubMenuText(['article1', 'article2', 'article3', 'faq']);
        break;
      default:
        break;
    }
    const subMenuElement = document.querySelector('.sub-menu');
    subMenuElement.classList.replace('is-inactive', 'is-active');
  };

  const onLeave = () => {
    const subMenuElement = document.querySelector('.sub-menu');
    subMenuElement.classList.replace('is-active', 'is-inactive');
  };

  return (
    <header className="home-header">
      <main>
        <img id="company-logo" alt="company logo" role="presentation" src={headerImg} />
        <SearchOutlined />
      </main>
      <nav onMouseLeave={onLeave} className="header-navbar">
        <a onMouseEnter={onHover} href="#aboutus">
          about us
          {' '}
          <DownOutlined />
        </a>
        <a onMouseEnter={onHover} href="#ourproducts">
          our products
          {' '}
          <DownOutlined />
        </a>
        <a onMouseEnter={onHover} href="#intimatehealth">
          intimate health
          {' '}
          <DownOutlined />
        </a>
        <a className="contactus-anchor" href="#contactus">contact us</a>
        <section className="sub-menu is-inactive">
          <nav>
            {
              subMenuText.map((text) => (<a href={`#${text}`}>{text}</a>))
            }
          </nav>
        </section>
      </nav>
    </header>
  );
}
