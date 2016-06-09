const initialState = {
  scene: {},
};

function routesReducer(state = initialState, action) {
  switch (action.type) {
    case 'focus' :
      return Object.assign({}, state, {
        scene: action.scene,
      });
    default:
      return state;
  }
}

export default routesReducer;
