/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import {
  FaRegEnvelope,
  FaPhone,
} from 'react-icons/fa';

export default function Tooltips({ email, phoneNumber }) {
  return (
    <div>
      {/* On affiche les icones uniquement si les champs ont été renseignés par le membre */}
      {email !== null && <a href={`mailto:${email}`}><FaRegEnvelope className="text-white" id="email-tooltip" /></a>}
      <UncontrolledTooltip placement="left" target="email-tooltip">
        { email }
      </UncontrolledTooltip>
      {phoneNumber !== '' && <a href={`tel:${phoneNumber}`}><FaPhone className="text-white" id="phone-tooltip" /></a>}
      <UncontrolledTooltip placement="top" target="phone-tooltip">
        { phoneNumber }
      </UncontrolledTooltip>
    </div>
  );
}
