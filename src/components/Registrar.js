import React, { Component } from 'react';
import CreateBus from './Formulario'
import { connect } from 'react-redux'
import { createNegocio } from './../store/actions/negocioActions'
import firebase from 'firebase'

class Registrar extends Component {

        handleBack=()=>{ this.props.history.goBack() }
        handleSubmit=(value)=>{
            console.log(value)
            const storageRef = firebase.storage().ref();
            const mountainsRef = storageRef.child(`file/${value.photo[0].name}`);
            const uploadTask= mountainsRef.put(value.photo[0])
            
      
           uploadTask.on('state_changed', function(snapshot){
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
             
            }, function(error) {
              // Handle unsuccessful uploads
            }, function() {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                 getURL(downloadURL);             
              });
            })
            const getURL=(url)=>this.props.createNegocio(value,url)   
           this.props.history.push('/');
        }
        //handleOnSubmitSuccess=(photo)=>this.pro 
    
    render() {
        return (
            <div>
                <CreateBus  onSubmitSuccess={this.handleOnSubmitSuccess}
                            onSubmit={this.handleSubmit}
                            onBack={this.handleBack}
     
                ></CreateBus>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
      createNegocio: (value,url) => dispatch(createNegocio(value,url))
    }
  }

export default  connect(null,mapDispatchToProps)(Registrar);