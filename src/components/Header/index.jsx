import React from 'react';
import './index.scss';
import {
  DownOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import headerImg from '../../assets/Header/headerImg.png';

export default function Header() {
  return (
    <header className="home-header">
      <main>
        <img id="company-logo" alt="company logo" role="presentation" src={headerImg} />
        <SearchOutlined />
      </main>
      <nav className="header-navbar">
        <a href="#aboutus">
          about us
          {' '}
          <DownOutlined />
        </a>
        <a href="#ourproducts">
          our products
          {' '}
          <DownOutlined />
        </a>
        <a href="#intimatehealth">
          intimate health
          {' '}
          <DownOutlined />
        </a>
        <a className="contactus-anchor" href="#contactus">contact us</a>
        <section className="sub-menu">
          <nav>
            <a href="#aboutus">lorem</a>
            <a href="#aboutus">lorem</a>
          </nav>
        </section>
      </nav>
    </header>
  );
}
