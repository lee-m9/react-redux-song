import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongsList extends Component {
  renderList = this.props.songs.map((song) => {
    return (
      <div key={song.title} className="item">
        <div className="right floated button">
          <button
            className="ui basic button compact primary"
            onClick={() => this.props.selectedSong(song)}
          >
            Select
          </button>
        </div>
        <div className="header">{song.title}</div>
      </div>
    );
  });

  render() {
    return <div className="ui relaxed divided list">{this.renderList}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectedSong })(SongsList);
