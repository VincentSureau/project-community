/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import SingleMember from 'src/components/SingleMember';
import ContactBar from './ContactBar';
import Biography from './Biography';

// Styles
import './member.scss';

/**
 * Code
 */
const Member = () => (
  <div id="member">
    <section id="member-info" className="bg-member">
      <SingleMember />
      <ContactBar />
    </section>
    <Biography />
  </div>

);

/**
 * Export
 */
export default Member;
