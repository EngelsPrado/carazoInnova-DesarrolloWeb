import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyB5vI7OTQDCNRLrbZcSweqyU6xcIlOEf6A",
  authDomain: "businic-aeaea.firebaseapp.com",
  databaseURL: "https://businic-aeaea.firebaseio.com",
  projectId: "businic-aeaea",
  storageBucket: "businic-aeaea.appspot.com",
  messagingSenderId: "705194211013"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase 