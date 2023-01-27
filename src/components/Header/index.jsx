import React from 'react';
import './index.scss';
import { SearchOutlined } from '@ant-design/icons';

import headerImg from '../../assets/Header/headerImg.png';

export default function Header() {
  return (
    <>
      <header className="home-header">
        <img alt="company logo" role="presentation" src={headerImg} />
        <SearchOutlined />
      </header>
      <nav />
    </>
  );
}
