/**
 * NPM import
 */
import React from 'react';
import { Route } from 'react-router-dom';
import serialize from 'form-serialize';
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
    const { getMemberWithId, id, getCompetences} = this.props;
    getMemberWithId(id.split('-')[2]);
    getCompetences();
  }


  onChangeInput(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.value);
  }

  onChangeCheckbox(evt) {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.name, evt.target.checked);
  }

  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = serialize(event.target, { hash: true, empty: true, disabled: false });
    console.log(data);
    const { postChangeMember } = this.props;
    postChangeMember(data, event.target.id.value);
  }

  handleDeleteMember(id, history) {
    console.log(id);
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
    const { member, value, competences } = this.props;
    const promoname = this.getNestedObject(member, ['promotion', 'name']);
    const spename = this.getNestedObject(member, ['specialisation', 'name']);
    const competencesMember = this.getNestedObject(member, ['competences']);
    return (
      <div id="memberedit">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input className="d-none" disabled type="text" name="id" value={member.id} />
          <section id="memberedit-form" className="d-flex flex-column justify-content-center align-items-center bg-member">
            <div className="row justify-content-center align-items-center">
              <img src={member.profilePicture} className="singlemember-photo" alt="" />
              <input className="mx-2" type="file" name="profile_pic" accept=".jpg, .jpeg, .png" />
            </div>
            <p className="singlemember-name">{member.firstname}</p>
            <p className="singlemember-name name-to-disapear">{member.lastname}</p>
            <p className="singlemember-prom">#{promoname} #{spename}</p>
            <div id="memberedit-form-info" className="row justify-content-center">
              <p className="label col-5">Ville: </p>
              <input className="col-5 input-text" type="text" name="city" placeholder="Nantes" value={value.city} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Code Postal: </p>
              {/*<input className="col-5 input-text" type="number" name="zipcode" placeholder="44000" value={value.zipcode} onChange={e => this.onChangeInput(e)} />*/}
              <p className="label col-5">Adresse mail: </p>
              <input className="col-5 input-text" type="email" name="email" placeholder="marc.dubois@duboiscorp.fr" value={value.email} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Téléphone: </p>
              <input className="col-5 input-text" type="text" name="phoneNumber" placeholder="+33123456789" value={value.phoneNumber} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Lien Github: </p>
              <input className="col-5 input-text" type="text" name="linkGithub" placeholder="https://github.com/marcdub" value={value.linkGithub} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Lien Linked'In: </p>
              <input className="col-5 input-text" type="text" name="linkLinkedin" placeholder="https://linkedin.com/in/marcdubois/" value={value.linkLinkedin} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Lien PortFolio: </p>
              <input className="col-5 input-text" type="text" name="linkPersonal" placeholder="https://www.duboiscorp.fr" value={value.linkPersonal} onChange={e => this.onChangeInput(e)} />
              <p className="label col-2">Bio: </p>
              <textarea className="col-8 input-textarea" type="textarea" name="description" row="" placeholder="Décrivez votre parcourt, votre but et tout ce qui fait qu'un recruteur veuille de vous." value={value.description} onChange={e => this.onChangeInput(e)} />
              <p className="label col-5">Compétences: </p>
              <div className="col-5 multiselection">
                <div className="form-check">
                  { ((competences != null) && (competencesMember != null))
                    ? competences.map(competence => (
                      <div className="form-check-label">
                        <input
                          name={this.getNestedObject(competence, ['@id'])}
                          onChange={e => this.onChangeCheckbox(e)}
                          defaultChecked={(competencesMember.map(competenceMember => (competenceMember['@id'] === this.getNestedObject(competence, ['@id']))).filter(response => response === true)[0])}
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
              <button className="col-6 button-submit" type="submit">Enregistrer</button>
            </div>
          </section>
        </form>
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


/**
 * Export
 */
export default MemberEdit;
