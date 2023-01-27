import React from 'react';
import Header from '../../components/Header';
import './index.scss';
import bannerHero from '../../assets/Home/banner-hero.png';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <img role="presentation" alt="Demonstration of the products available" src={bannerHero} />
      <main>
        <section />
      </main>
    </div>
  );
}
