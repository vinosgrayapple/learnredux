const initalState = ''

export function filterTracks (state = initalState, action) {
  switch (action.type) {
    case 'SEARCH_TRACK':
      return action.payload
    default:
      return state
  }
}
