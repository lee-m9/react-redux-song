import { combineReducers } from "redux";

//Reducers

const songsListReducer = () => {
  return [
    { title: "Trust Issues", duration: "3:00" },
    { title: "Fever", duration: "4:30" },
    { title: "The Wisp Sings", duration: "5:00" },
    { title: "Flight", duration: "4:32" },
  ];
};

const selectedSongReducer = (song = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return song;
};

export default combineReducers({
  songs: songsListReducer,
  selectedSong: selectedSongReducer,
});
