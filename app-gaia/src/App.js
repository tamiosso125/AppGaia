import React from "react";
import TvShowList from "./components/TvShowList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Gaia: Compêndio das coisas tudo</h1>
        <TvShowList />
      </main>
    );
  }
}

export default App;