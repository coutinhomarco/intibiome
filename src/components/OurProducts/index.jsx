import React from 'react';
import firstProduct2x from '../../assets/OurProducts/image mask@2x.png';
import secondProduct2x from '../../assets/OurProducts/image mask2@2x.png';
import thirdProduct2x from '../../assets/OurProducts/image mask3@2x.png';
import './index.scss';

export default function index() {
  return (
    <section id="product-technology" className="our-products">
      <h1>
        whatever your age. whatever your lifestyle. whatever your interests.
      </h1>
      <p>
        Co-created with gynaecologists, our revolutionary products have been expertly developed to
        support your intimate microbiome and pH balance, and strengthen overall natural health.
      </p>
      <p>
        As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out
        of the dark and demystify the taboos that surround it.
      </p>
      <h1 id="our-products-h1">our products</h1>
      <div id="all-products" className="our-products-section">
        <section className="products-section">
          <div id="intibiome-wellness">
            <img loading="lazy" alt="intibiome wellness daily intimate wash" src={firstProduct2x} />
            <p>intibiome wellness daily intimate wash</p>
            <div id="wellness">
              <p>wellness</p>
            </div>
          </div>
          <div id="intibiome-active">
            <img loading="lazy" alt="intibiome active extra protection intimate wash" src={secondProduct2x} />
            <p>intibiome active extra protection intimate wash</p>
            <div id="active">
              <p>active</p>
            </div>
          </div>
          <div id="intibiome-agecare">
            <img loading="lazy" alt="intibiome agecare dryness relief intimate wash" src={thirdProduct2x} />
            <p>intibiome agecare dryness relief intimate wash</p>
            <div id="age-care">
              <p>age-care</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
