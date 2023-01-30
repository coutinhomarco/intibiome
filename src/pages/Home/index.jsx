import React from 'react';
import Header from '../../components/Header';
import AboutUs from '../../components/AboutUs';
import OurProducts from '../../components/OurProducts';
import Articles from '../../components/Articles';
import Footer from '../../components/Footer';
import './index.scss';
import bannerHero from '../../assets/Home/banner-hero@2x.png';
import bannerHeroMobile from '../../assets/Home/banner-hero-mobile.png';

import secondBannerHero from '../../assets/Home/Asset 22@2x.png';
import secondBannerHeroMobile from '../../assets/Home/banner-intibiome-05.png';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <picture>
        <source media="(max-width: 500px)" srcSet={bannerHeroMobile} />
        <img role="presentation" alt="Demonstration of the products available - desktop" src={bannerHero} />
      </picture>
      <main>
        <AboutUs />
        <OurProducts />
        <picture>
          <source media="(max-width: 500px)" srcSet={secondBannerHeroMobile} />
          <img loading="lazy" alt="care for intimate microbiome" src={secondBannerHero} />
        </picture>
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
