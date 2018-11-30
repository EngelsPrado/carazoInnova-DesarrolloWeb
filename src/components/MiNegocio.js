import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import NegocioSummary from './NegocioSummary';

class MiNegocio extends Component {
    render() {
        const {negocios,auth}=this.props
        console.log(negocios,auth)
        return (
            <div>
                  {
                     negocios && negocios.map(negocio=>{
                       if(negocio.authorId==auth.uid)
                       {
                         return <NegocioSummary negocios={negocio} key={negocio.id} ></NegocioSummary>
                       }
                     })
                  }                
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      negocios: state.firestore.ordered.negocios,
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'negocios' }
    ])
  )(MiNegocio)