import React, { useState } from 'react';
import './index.scss';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';

import headerImg from '../../assets/Header/headerImg.png';

export default function Header() {
  const [subMenuText, setSubMenuText] = useState(['']);
  const onHover = ({ target }) => {
    switch (target.textContent) {
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

  const serializeString = (str) => str.replace(' ', '-').toLowerCase();
  return (
    <header className="home-header">
      <main>
        <img id="company-logo" alt="company logo" role="presentation" src={headerImg} />
        <SearchOutlined />
      </main>
      <nav onMouseLeave={onLeave} className="header-navbar">
        <p onMouseEnter={onHover}>
          about us
          {' '}
          <DownOutlined />
        </p>
        <p onMouseEnter={onHover}>
          our products
          {' '}
          <DownOutlined />
        </p>
        <p onMouseEnter={onHover}>
          intimate health
          {' '}
          <DownOutlined />
        </p>
        <p className="contactus-anchor">contact us</p>
        <section className="sub-menu is-inactive">
          <nav>
            {
              subMenuText.map((text) => {
                const serializedText = serializeString(text);
                return <a key={serializedText} href={`#${serializedText}`}>{text}</a>;
              })
            }
          </nav>
        </section>
      </nav>
    </header>
  );
}
