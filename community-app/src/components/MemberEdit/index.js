/**
 * NPM import
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import serialize from '../../functions/Serialize';

/**
 * Local import
 */
// Components

// Styles
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
    // on récupère uniquement les chiffres pour récupérer le membre
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

    return (
      <div id="memberedit">
        <form action="post" onSubmit={e => this.handleSubmit(e)}>
          <input hidden name="id" defaultValue={member.id} />
          <section id="memberedit-form" className="d-flex flex-column justify-content-center align-items-center bg-member">
            <div className="row justify-content-center align-items-center">
              <img src={member.profilePicture} className="singlemember-photo" alt="" />
              {/*<input className="mx-2" type="file" name="profile_pic" accept=".jpg, .jpeg, .png" />*/}
              <input className="col-5 input-text" type="text" name="profilePicture" placeholder="lien web de l'image" onChange={e => this.onChangeInput(e)} defaultValue={member.profilePicture} />
            </div>
            <p className="singlemember-name">{member.firstname}</p>
            <p className="singlemember-name name-to-disapear">{member.lastname}</p>
            <p className="singlemember-prom">#{promoname} #{spename}</p>
            <div id="memberedit-form-info" className="row justify-content-center">
              <p className="label col-5">Ville: </p>
              <input className="col-5 input-text" type="text" name="city" placeholder="Nantes" defaultValue={value.city} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Code Postal: </p>
              <input className="col-5 input-text" type="number" name="zipcode" placeholder="44000" defaultValue={value.zipcode} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Adresse mail: </p>
              <input required className="col-5 input-text" type="email" name="email" placeholder="marc.dubois@duboiscorp.fr" defaultValue={value.email} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Téléphone: </p>
              <input className="col-5 input-text" type="text" name="phoneNumber" placeholder="+33123456789" defaultValue={value.phoneNumber} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Lien Github: </p>
              <input className="col-5 input-text" type="text" name="linkGithub" placeholder="https://github.com/marcdub" defaultValue={value.linkGithub} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Lien Linked'In: </p>
              <input className="col-5 input-text" type="text" name="linkLinkedin" placeholder="https://linkedin.com/in/marcdubois/" defaultValue={value.linkLinkedin} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Lien PortFolio: </p>
              <input className="col-5 input-text" type="text" name="linkPersonal" placeholder="https://www.duboiscorp.fr" defaultValue={value.linkPersonal} onChange={e => this.onChangeInput(e)} />
              <p className="label col-2">Bio: </p>
              <textarea className="col-8 input-textarea" type="textarea" name="description" row="" placeholder="Décrivez votre parcourt, votre but et tout ce qui fait qu'un recruteur veuille de vous." defaultValue={value.description} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Compétences: </p>
              <div className="col-5 multiselection">
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
              <p className="label col-5">Status professionnel: </p>

              <div>
                <select id="selectinput-select" className="w-100 text-white" name="professionalStatus" onChange={e => this.onChangeInput(e)} >
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
              <div className="form-check col-12 ">
                <input name="isActive" type="checkbox" defaultChecked={member.isActive} onChange={e => this.onChangeCheckbox(e)} defaultValue={member.isActive} />
                Afficher mon profil
              </div>
              {submitError !== undefined
                && <p className="alert alert-danger">{submitError}</p>
              }
              <button className="col-6 button-submit" type="submit">Enregistrer</button>
            </div>
          </section>
        </form>
        {editFormSend && <Redirect to={''.concat('/members/', member.slug)} />}
        <div className="d-flex flex-column justify-content-center align-items-center bg-member">
          <Route render={
            ({ history }) => (<button className="col-2 button-deleteProfile" type="button" onClick={() => this.handleDeleteMember(member.id, history)}>Supprimer mon profil</button>)
          }
          />
        </div>
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
