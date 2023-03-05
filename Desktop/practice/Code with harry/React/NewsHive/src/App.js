import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import "./Components/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     pageSize:9,
  //   }
  // }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" />} />
            <Route
              exact
              path="/business"
              element={<News key="" category="business" />}
            />
            <Route exact path="/sports" element={<News key="sports" category="sports" />} />
            <Route
              exact
              path="/entertainment"
              element={<News key="entertainment" category="entertainment" />}
            />
            <Route
              exact
              path="/politics"
              element={<News key="politics" category="politics" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" category="science" />}
            />
            <Route exact path="/health" element={<News key="health" category="health" />} />
            <Route
              exact
              path="/technology"
              element={<News key="technology" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
