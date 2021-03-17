const initalState =    ['My Home', 'My Work']

export   function playlists(state=initalState, action) {
switch(action.type){
  case 'ADD_PLAYLIST':
    return  [...state, action.payload]
  case 'DELETE_PLAYLIST':
      return  state.filter(playlist => playlist !== action.payload)
  default:
    return state
  }
}