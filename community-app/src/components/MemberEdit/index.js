/**
 * NPM import
 */
import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import serialize from '../../functions/Serialize';

/**
 * Local import
 */
// Components

// Styles
import { API_URL } from '../../configuration';
import './memberedit.scss';

/**
 * Code
 */
class MemberEdit extends React.Component {
  componentDidMount() {
    const {
      getMemberWithId,
      id,
      getCompetences,
      getProStatus,
    } = this.props;
    // L'id est de type: capucine-bertin-650,
    getMemberWithId(id);
    getCompetences();
    getProStatus();
  }

  onChangeInput(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.value);
  }

  onChangeCheckbox(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.checked);
  }

  // Fonction qui permet de récupérer un élément imbriqué dans un objet à plusieurs niveaux
  getNestedObject = (nestedObj, pathArr) => (
    pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
  );

  onChangeFile(evt) {
    const { member } = this.props;
    const fd = new FormData();
    if (evt.target.files[0].size < 500000) {
      fd.append('file', evt.target.files[0], evt.target.files[0].name);
      axios.post(`${API_URL}/app_users/${member.id}/profil_picture`, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('connect_token')}`,
        },
      }).then((response) => {
        console.log(response);
        window.location.reload(true);
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // Serialize permet de formater l'envoi des données
    const data = serialize(event.target, { hash: true, empty: true, disabled: false });
    const { postChangeMember } = this.props;
    postChangeMember(data, event.target.id.value);
  }

  handleDeleteMember(id, history) {
    const { deleteMember, member } = this.props;
    switch (window.prompt('ATTENTION: Tu vas supprimer ton profil. Si tu souhaite le recréer, pense à passer par un admin. Tu devras tout refaire. Es-tu sûr à 10000% ? Si oui, ecris ton prénom en dessous')) {
      case member.firstname:
        deleteMember(id);
        history.push('/');
        break;

      default:
        break;
    }
  }

  render() {
    const {
      member,
      value,
      competences,
      status,
      editFormSend,
      submitError,
    } = this.props;
    const promoname = this.getNestedObject(member, ['promotion', 'name']);
    const spename = this.getNestedObject(member, ['specialisation', 'name']);
    const competencesMember = this.getNestedObject(member, ['competences']);
    if (Object.keys(member).length !== 0) {
      return (
        <div id="memberedit">
          <form action="post" onSubmit={e => this.handleSubmit(e)}>
            <input hidden name="id" defaultValue={member.id} />
            <section id="memberedit-form" className="d-flex flex-column justify-content-center align-items-center bg-member row">
              <p className="singlemember-name">{member.firstname}</p>
              <p className="singlemember-name name-to-disapear">{member.lastname}</p>
              <p className="singlemember-prom mb-4">#{promoname} {spename !== undefined ? `#${spename}` : ''}</p>
              <div className="row flex-column justify-content-center align-items-center">
                <img src={`${API_URL}/img/profils/${member.contentUrl}`} className="singlemember-photo mb-3" alt="" />
                <label className="label col-12" htmlFor="profil-picture-input d-flex flex-column align-items-center" id="infoImage">
                  Image de profil (max: 500Ko):
                  <input id="profil-picture-input" className="col-12 input-text d-block text-member-navfoot mb-3 mt-2 w-80" type="file" name="profilePicture" placeholder="lien web de l'image" onChange={e => this.onChangeFile(e)} defaultValue={member.profilePicture} accept=".jpg, .png, .jpeg" />
                </label>
              </div>
              <div id="memberedit-form-info" className="row justify-content-center col-12">
                <label className="label col-12" htmlFor="city-input">
                  Ville :
                  <input id="city-input" className="input-text col-12" type="text" name="city" placeholder="Nantes" defaultValue={value.city} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="zipcode-input">
                  Code Postal :
                  <input id="zipcode-input" className="input-text col-12" type="number" name="zipcode" placeholder="44000" defaultValue={value.zipcode} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="mail-input">
                  Adresse mail : (obligatoire)
                  <input id="mail-input" required className="col-12 input-text" type="email" name="email" placeholder="marc.dubois@duboiscorp.fr" defaultValue={value.email} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="phone-input">
                  Téléphone :
                  <input id="phone-input" className="col-12 input-text" type="text" name="phoneNumber" placeholder="+33123456789" defaultValue={value.phoneNumber} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="github-input">
                  Lien Github :
                  <input id="github-input" className="col-12 input-text" type="text" name="linkGithub" placeholder="https://github.com/marcdub" defaultValue={value.linkGithub} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="linkedin-input">
                  Lien Linked'In :
                  <input id="linkedin-input" className="col-12 input-text" type="text" name="linkLinkedin" placeholder="https://linkedin.com/in/marcdubois/" defaultValue={value.linkLinkedin} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="portfolio-input">
                  Lien PortFolio :
                  <input id="portfolio-input" className="col-12 input-text" type="text" name="linkPersonal" placeholder="https://www.duboiscorp.fr" defaultValue={value.linkPersonal} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="bio-textarea">
                  Biographie :
                  <textarea id="bio-textarea" className="col-12 input-textarea" type="textarea" name="description" row="" placeholder="Décrivez votre parcourt, votre but et tout ce qui fait qu'un recruteur veuille de vous." defaultValue={value.description} onChange={e => this.onChangeInput(e)} />
                </label>
                <label className="label col-12" htmlFor="competences-checkbox">
                  Compétences:
                  <div id="competences-checkbox" className="col-12 multiselection">
                    <div className="form-check">
                      { ((competences != null) && (competencesMember != null))
                        ? competences.map(competence => (
                          <div className="form-check-label" key={competence['@id']}>
                            <input
                              name="competences[]"
                              onChange={e => this.onChangeCheckbox(e)}
                              defaultChecked={(competencesMember.map(competenceMember => (competenceMember['@id'] === this.getNestedObject(competence, ['@id']))).filter(response => response === true)[0])}
                              defaultValue={this.getNestedObject(competence, ['@id'])}
                              type="checkbox"
                              className="form-check-input"
                            />
                            {this.getNestedObject(competence, ['name'])}
                          </div>
                        ))
                        : <p>Loading</p>
                      }
                    </div>
                  </div>
                </label>s
                <label className="label col-12" htmlFor="selectinput-select">
                  Status professionnel:
                  <div>
                    <select id="selectinput-select" className="col-8 text-white" name="professionalStatus" onChange={e => this.onChangeInput(e)} >
                      {(status != null)
                        ? status.map(singleStatus => (
                          <option
                            key={this.getNestedObject(singleStatus, ['@id'])}
                            value={this.getNestedObject(singleStatus, ['@id'])}
                            selected={value.status === this.getNestedObject(singleStatus, ['name'])}
                          >
                            {this.getNestedObject(singleStatus, ['name'])}
                          </option>
                        ))
                        : <p>Loading</p>
                      }
                    </select>
                  </div>
                </label>
                <label className="label col-12 mt-4 mb-4" htmlFor="isMemberActive-input">
                  Affichage du profil
                  <div className="text-white font-weight-normal">
                    <input id="isMemberActive-input" name="isActive" type="checkbox" defaultChecked={member.isActive} onChange={e => this.onChangeCheckbox(e)} defaultValue={member.isActive} />
                    Je souhaite afficher mon profil
                  </div>
                </label>
                {submitError !== undefined && submitError !== ''
                  && <p className="alert alert-danger">{submitError}</p>
                }
                <button className="col-6 button-submit" type="submit">Enregistrer</button>
              </div>
            </section>
          </form>
          {editFormSend && <Redirect to={''.concat('/members/', member.slug)} />}
          <div className="d-flex flex-column justify-content-center align-items-center bg-member">
            <Route render={
              ({ history }) => (<button className="col-6 col-md-3 col-lg-2 button-deleteProfile" type="button" onClick={() => this.handleDeleteMember(member.id, history)}>Supprimer mon profil</button>)
            }
            />
          </div>
        </div>
      );
    }
    return (
      <div id="memberedit">
        <section id="memberedit-form" className="d-flex flex-column justify-content-center h-100vh align-items-center bg-member">
          <ReactLoading type="bubbles" color="#fdf1cd" height={150} width={150} />
          <p className="singlemember-name">Chargement du profil...</p>
        </section>
      </div>
    );
  }
}

MemberEdit.propTypes = {
  id: PropTypes.string.isRequired,
  getMemberWithId: PropTypes.func.isRequired,
  getCompetences: PropTypes.func.isRequired,
  getProStatus: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  postChangeMember: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  editFormSend: PropTypes.bool.isRequired,
  competences: PropTypes.array,
  status: PropTypes.array,
  submitError: PropTypes.string,
};

MemberEdit.defaultProps = {
  competences: [],
  status: [],
  submitError: undefined,
};

/**
 * Export
 */
export default MemberEdit;
