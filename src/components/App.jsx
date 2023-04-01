import { Component } from "react";

import PhotoPage from "./PhotoPage/PhotoPage";
import Searchbar from "./Searchbar/Searchbar";

import "../index.css";
import css from "./App.module.css";

class App extends Component{
  state = {
    query: '',
  }

  changeQuery = (query) => {
    this.setState({ query });
  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.changeQuery} />
        <PhotoPage query={this.state.query} />
      </div>
    );
  }
};

export default App; 