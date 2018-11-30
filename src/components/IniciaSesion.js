import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { getFirestore } from 'redux-firestore';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class IniciaSesion extends Component {

    state = {
        isSignedIn:false
      }

    componentDidMount=()=>{
        firebase.auth().onAuthStateChanged(user=>{
          this.setState({
            isSignedIn:!!user,
         })
         console.log(user)
         if(user )
         {
          const db=getFirestore(); 
          const userRef=db.collection("user").doc(user.uid) 
          
          userRef.set({
             name: user.displayName,
             email: user.email,
             uid: user.uid
         })
         .then(function() {
             console.log("User successfully written!");
         })
         .catch(function(error) {
             console.error("Error writing document: ", error);
         });
         }
   
        })
      }

    uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'http://localhost:3000/dashboard',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };
    render() {
        const { authError, auth } = this.props;
   
        if (auth.uid || this.state.isSignedIn) return <Redirect to='/' /> 
        return (
            <div className="dashboard container">
             <div className="col s12 m6">
             <img    src="https://firebasestorage.googleapis.com/v0/b/businic-aeaea.appspot.com/o/Logo%20de%20app-03.png?alt=media&token=70ec9631-1769-4dd6-96c9-028876daccfb"  className="img-thumbnail mx-auto d-block rounded " alt="Responsive image" > 
             </img>
              <StyledFirebaseAuth className="ui" uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps) (IniciaSesion);