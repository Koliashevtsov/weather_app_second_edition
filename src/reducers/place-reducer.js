const placeReducer = (state, action) => {
  if(state === undefined){
    return {
      cityName: 'Kyiv',
      loading: null,
      err: null,
      coordinates: {
        lat: '50.431759', lon: '30.517023'
      },
    };
  }
  switch (action.type) {
    case 'CITY_NAME_SET':
    console.log('action.payload', action.payload);
      return {
        ...state,
        cityName: action.payload
      };
    case 'COORDINATES_OBJ_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
        cityName: '',
        coordinates: []
      };
    case 'COORDINATES_OBJ_FAILURE':
      return {
        ...state,
        loading: null,
        err: action.payload
      };
    case 'COORDINATES_OBJ_SUCCESS':
      return {
        ...state,
        loading: null,
        coordinates: action.payload
      };
    default:
      return state;
  }
}
export default placeReducer;
