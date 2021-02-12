//Action Creators

export const selectedSong = (song) => {
  return {
    //Action
    type: "SELECTED_SONG",
    payload: song,
  };
};
