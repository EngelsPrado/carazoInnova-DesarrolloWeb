import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListNegocios from './listNegocios';

class Dashboard extends Component {
    render() {
        const {  auth,negocios } = this.props;
        console.log(negocios)
       
        if (!auth.uid) return <Redirect to='/' /> 
        return (
            <div className="dashboard container">
             <div className="row">
               <div className="col s12 m6">
                 <ListNegocios negocios={negocios}></ListNegocios>
               </div>
               <div className="col s12 m5 offset-m1">
                 <h3>Tareas</h3>
               </div>   
             </div>
            

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
      { collection: 'negocios' ,orderBy:['createdAt','desc']}
    ])
  )(Dashboard)