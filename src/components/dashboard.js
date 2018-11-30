import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect,Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListNegocios from './listNegocios';
import Notifications from './Notifications';

class Dashboard extends Component {
    render() {
        const {  auth,negocios,notifications } = this.props;
        console.log(negocios,notifications)
       
        if (!auth.uid) return <Redirect to='/' /> 
        return (
            <div className="dashboard container">
             <div className="row">
               <div className="col-md-10">
                 <ListNegocios negocios={negocios}></ListNegocios>
               </div>
              
               <div className="col s12 m2 ">
                <Notifications notifications={notifications} />
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
      notifications: state.firestore.ordered.notifications
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'negocios' ,orderBy:['createdAt','desc']},
      { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
  )(Dashboard)