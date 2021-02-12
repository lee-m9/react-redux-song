import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <h4 className="ui header disabled">Select a Song!</h4>;
  }

  return (
    <div>
      <h3 className="header">Selected Song Details </h3>
      <div className="ui label">
        Title:
        <div className="detail">{song.title}</div>
      </div>
      <div className="ui hidden divider fitted"></div>
      <div className="ui label">
        Duration:
        <div className="detail teal ui">{song.duration}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
