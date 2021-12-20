
import { combineReducers } from 'redux'

const songReducer = () => {
  return [
    {title: 'Song01', duration:'4:01'},
    {title: 'Song02', duration:'4:02'},
    {title: 'Song03', duration:'4:03'},
    {title: 'Song04', duration:'4:04'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED"){
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
})