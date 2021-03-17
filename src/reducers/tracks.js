const initalState =  [
    ]

export   function tracks(state=initalState, action) {
  switch(action.type){
    case 'ADD_TRACK':
      return  [...state, action.payload]
    case 'DELETE_TRACK':
        return  state.filter(track => track !== action.payload)
    default:
      return state
    }
}