/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

/**
 * Local import
 */
// Components

// Styles
import './member.scss';

/**
 * Code
 */
const Biography = ({
  description,
  promotion,
  promoStartDate,
  promoEndDate,
  professionalStatus,
  // competences,
}) => (
  <section id="member-biography" className="bg-member-darker d-flex justify-content-center align-items-center row">
    <article className="biography-article col-4 mr-5">
      <h2>En quelques mots</h2>
      <div className="w-80 mt-4">
        <FaQuoteLeft className="biography-article-quotationmark text-membertext" />
        <p className="biography-article-description">{description}</p>
        <FaQuoteRight className="biography-article-quotationmark text-membertext" />
      </div>
    </article>
    <article className="biography-article col-3 ml-5">
      <div className="biography-article-group">
        <h2>Promotion</h2>
        <p className="biography-article-group-important text-membertext">{`#${promotion}`}</p>
        <p className="biography-article-group-date">{`${promoStartDate} - ${promoEndDate}`}</p>
      </div>
      <div className="biography-article-group">
        <h2>En ce moment</h2>
        <p className="biography-article-group-important text-membertext">{professionalStatus}</p>
      </div>
      <div className="biography-article-group">
        <h2>Je maîtrise ...</h2>
        <div className="mt-3 d-flex flex-wrap">
          {/* {competences.map(competence => (<span className="biography-article-group-tech">{competence</span>))} */}
          <span className="biography-article-group-tech">CSS</span>
          <span className="biography-article-group-tech">Bootstrap</span>
          <span className="biography-article-group-tech">Git</span>
          <span className="biography-article-group-tech">Javascript</span>
          <span className="biography-article-group-tech">PHP</span>
        </div>
      </div>

    </article>

  </section>
);


Biography.propTypes = {
  description: PropTypes.string.isRequired,
  promotion: PropTypes.string.isRequired,
  promoStartDate: PropTypes.string.isRequired,
  promoEndDate: PropTypes.string.isRequired,
  professionalStatus: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Biography;
