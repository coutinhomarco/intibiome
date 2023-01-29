import React from 'react';
import Header from '../../components/Header';
import AboutUs from '../../components/AboutUs';
import OurProducts from '../../components/OurProducts';
import Articles from '../../components/Articles';
import Footer from '../../components/Footer';
import './index.scss';
import bannerHero from '../../assets/Home/banner-hero.png';
import secondBannerHero from '../../assets/Home/Asset 22.png';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <img role="presentation" alt="Demonstration of the products available" src={bannerHero} />
      <main>
        <AboutUs />
        <OurProducts />
        <img loading="lazy" alt="care for intimate microbiome" src={secondBannerHero} />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
