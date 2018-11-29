
export const createNegocio = (negocio,url) => {

    return (dispatch, getState, {getFirestore},state) => {
      const firestore = getFirestore();
      const profile = getState().firebase.auth;
      const authorId = getState().firebase.auth.uid;

      console.log(negocio)
      firestore.collection('negocios').add({
        user:profile.displayName,
        authorId: authorId,
        createdAt: new Date(),
        urlPhoto:url.toString()
      }).then(() => {
        dispatch({ type: 'CREATE_NEGOCIO_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_NEGOCIO_ERROR' }, err);
      });
    }
  };