import React from 'react';
import aboutUsImg from '../../assets/AboutUs/icons.png';
import './index.scss';

export default function index() {
  return (
    <section id="brand-philosophy" className="about-us">
      <h1>we’re here to help</h1>
      <p>
        When it comes to caring for our most intimate areas, we’ve lost our connection.
      </p>
      <p>
        Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.
      </p>
      <p>
        We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.
      </p>
      <img alt="Company values: Promote, Preserve, Protect" src={aboutUsImg} />
    </section>
  );
}
