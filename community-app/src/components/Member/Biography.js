/**
 * NPM import
 */
import React from 'react';
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
const Biography = () => (
  <section id="member-biography" className="bg-member-darker d-flex justify-content-center align-items-center row">
    <article className="biography-article col-4 mr-5">
      <h2>En quelques mots</h2>
      <div className="w-80 mt-4">
        <FaQuoteLeft className="biography-article-quotationmark text-membertext" />
        <p className="biography-article-description">Véritable passionnée, j'aime travailler sur toutes les étapes d'un projet ! Intégration, HTML/CSS, interactivité, architecture front-end et back-end, déploiement et intégration continue pour produire des applications robustes et orientées utilisateur. Véritable passionnée, j'aime travailler sur toutes les étapes d'un projet ! Intégration, HTML/CSS, interactivité, architecture front-end et back-end, déploiement et intégration continue pour produire des applications robustes et orientées utilisateur.</p>
        <FaQuoteRight className="biography-article-quotationmark text-membertext" />
      </div>
    </article>
    <article className="biography-article col-3 ml-5">
      <div className="biography-article-group">
        <h2>Promotion</h2>
        <p className="biography-article-group-important text-membertext">#Krytpon</p>
        <p className="biography-article-group-date">Juillet 2018 - Décembre 2018</p>
      </div>
      <div className="biography-article-group">
        <h2>En ce moment</h2>
        <p className="biography-article-group-important text-membertext">En recherche d'emploi</p>
      </div>
      <div className="biography-article-group">
        <h2>Je maîtrise ...</h2>
        <div className="mt-3 d-flex flex-wrap">
          <span className="biography-article-group-tech">HTML5</span>
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

/**
 * Export
 */
export default Biography;
