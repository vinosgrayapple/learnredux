import React from 'react';
import { connect } from "react-redux";
function App({tracks,add_track,search_track}) {
  let textInput = React.createRef();
  let searchInput = React.createRef()
 const  handlerClick = () => {
  add_track(textInput.current.value)
  textInput.current.value=''
  }
  const  handlerSearch = () => {
    search_track(searchInput.current.value)
    }
  return (
    <div className="App">
    <div className="bar">
      <input type="text" ref={textInput}/>
      <button onClick={handlerClick}>Add Track</button>
    </div>
    <div className="search">
      <input type="text" onChange={handlerSearch} ref={searchInput}/>
      <button onClick={handlerSearch}>Find Track</button>
    </div>
    <ul id="listTrack">
      {tracks.map((track,i) => <li key={i}>{track.name}</li>)}
    </ul>
    </div>
  );
}

export default connect(
  state  => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    add_track(trackname) {
      const payload = {
        id: Date.now().toString(),
        name: trackname
      }
      console.log(payload);
      dispatch({ type: 'ADD_TRACK', payload })
    },
    search_track(trackname) {
      dispatch({ type: 'SEARCH_TRACK', payload: trackname })
    },
  })
)(App);
