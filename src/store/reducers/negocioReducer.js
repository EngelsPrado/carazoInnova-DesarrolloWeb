const initState = {}

const  negocioReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NEGOCIO_SUCCESS':
      console.log('create negocio success');
      return state;
    case 'CREATE_NEGOCIO_ERROR':
      console.log('create negocio error');
      return state;
    default:
      return state;
  }
};

export default negocioReducer;