import React from 'react';
import article1 from '../../assets/Articles/articles1.png';
import article2 from '../../assets/Articles/articles2.png';
import article3 from '../../assets/Articles/articles3.png';

import './index.scss';

export default function index() {
  return (
    <section className="articles">
      <h1>keep up to date with our discoveries</h1>
      <div className="articles-container">
        <div className="article">
          <img loading="lazy" alt="article" src={article1} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="article">
          <img loading="lazy" alt="article" src={article2} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="article">
          <img loading="lazy" alt="article" src={article3} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <button type="button">see more</button>
    </section>
  );
}
