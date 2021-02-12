import React from "react";
import SongsList from "./SongsList";
import SongDetails from "./SongDetails";

const App = () => {
  const style = { marginTop: "20px" };

  return (
    <div className="ui container segment raised very padded" style={style}>
      <div className="ui grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongsList />
          </div>
          <div className="column eight wide">
            <SongDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
