import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment';

const NegocioDetail = (props) => {

  const { negocio, auth } = props;
  if (!auth.uid) return <Redirect to='/' /> 
  if (negocio) {
    return (
      <div className="container section project-details">
        <div class="card mb-3">
           <img class="card-img-top" src={} alt="Card image cap" />
       <div class="card-body">
        <h5 class="card-title">{}</h5>
        <p class="card-text">{}</p>
        <p class="card-text"><small class="text-muted">{}</small></p>
      </div>
   </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Cargando Negocios...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const negocios = state.firestore.data.negocios;
  const negocio = negocios ? negocios[id] : null
  return {
    negocio,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'negocios'
  }])
)(NegocioDetail)