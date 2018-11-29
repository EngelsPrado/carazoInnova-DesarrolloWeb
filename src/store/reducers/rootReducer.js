import authReducer from './authReducer'
import negocioReducer from './negocioReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import {reducer as reduxForm} from 'redux-form'

const rootReducer = combineReducers({
  auth: authReducer,
  negocioReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: reduxForm,

});

export default rootReducer

// the key name will be the data property on the state object