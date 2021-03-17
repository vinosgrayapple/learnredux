const mockApiTracks = [
  {
    id:1,
    name:'Enter Sandman'
  },{
    id:2,
    name:'Rider on the Storm'
  },{
    id:3,
    name:'Welcome Home'
  },{
    id:4,
    name:'Master of Puppets'
  },{
    id:5,
    name:'Fade to Black'
  }
]
export const  getTracks = () =>  dispatch => {
          setTimeout(() => {
            console.log('AsyncDone!')
          dispatch({type: 'FETCH_TRACKS_SUCCESS',payload: mockApiTracks})
          }, 2000);
        }
      
 