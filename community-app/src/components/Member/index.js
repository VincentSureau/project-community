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
  </div>

);

/**
 * Export
 */
export default Member;
