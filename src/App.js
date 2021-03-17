import React from 'react';
import { connect } from "react-redux";
import { getTracks } from './actions/tracks'
function App({tracks,add_track,search_track,get_tracks}) {
  let textInput = React.createRef();
  let searchInput = React.createRef()
const handlerGetTracks = () => {
  get_tracks()
}
 const  handlerClick = () => {
  add_track(textInput.current.value)
  textInput.current.value=''
  }
  const  handlerSearch = () => {
    search_track(searchInput.current.value)
    }
  return (
    <div className="App">
    <p className="bar">
      <input type="text" ref={textInput}/>
      <button onClick={handlerClick}>Add Track</button>
    </p>
    <p className="search">
      <input type="text" onChange={handlerSearch} ref={searchInput}/>
      <button onClick={handlerSearch}>Find Track</button>
    </p>
    <p>
      <button onClick={handlerGetTracks}>Get Tracks</button>
    </p>
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
    get_tracks(){
      dispatch(getTracks())
    }
  })
)(App);
