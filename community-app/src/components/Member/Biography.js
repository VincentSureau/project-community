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
  competences,
}) => {
  if (competences != null) {
    // Récupération et formatage des dates de début et fin de formation
    const promostartdate = new Date(promoStartDate);
    const promoenddate = new Date(promoEndDate);
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
    ];
    const yearStart = promostartdate.getFullYear();
    const monthStart = monthNames[promostartdate.getMonth()];
    const yearEnd = promoenddate.getFullYear();
    const monthEnd = monthNames[promoenddate.getMonth()];

    return (
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
            <p className="biography-article-group-date">{`${monthStart} ${yearStart} - ${monthEnd} ${yearEnd}`}</p>
          </div>
          <div className="biography-article-group">
            <h2>En ce moment</h2>
            <p className="biography-article-group-important text-membertext">{professionalStatus}</p>
          </div>
          <div className="biography-article-group">
            <h2>Je maîtrise ...</h2>
            <div className="mt-3 d-flex flex-wrap">
              {competences.map(competence => (<span className="biography-article-group-tech" key={competence['@id']}>{competence.name}</span>))}
            </div>
          </div>

        </article>

      </section>
    );
  }

  return (
    <p>Loading</p>
  );
};


Biography.propTypes = {
  description: PropTypes.string,
  promotion: PropTypes.string,
  promoStartDate: PropTypes.string,
  promoEndDate: PropTypes.string,
  professionalStatus: PropTypes.string,
  competences: PropTypes.array,
};

Biography.defaultProps = {
  description: '',
  promotion: '',
  promoStartDate: '',
  promoEndDate: '',
  professionalStatus: '',
  competences: [],
};

/**
 * Export
 */
export default Biography;
