import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state = {
    progress: 0
  }
  setprogress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <NavBar />
          <Routes>
            <Route path="/general" element={<News setprogress={this.setprogress} key="general" country="in" category="general" />} />
            <Route path="/business" element={<News setprogress={this.setprogress} key="business" country="in" category="business" />} />
            <Route path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" country="in" category="entertainment" />} />
            <Route path="/general" element={<News setprogress={this.setprogress} key="general" country="in" category="general" />} />
            <Route path="/health" element={<News setprogress={this.setprogress} key="health" country="in" category="health" />} />
            <Route path="/science" element={<News setprogress={this.setprogress} key="science" country="in" category="science" />} />
            <Route path="/sports" element={<News setprogress={this.setprogress} key="sports" country="in" category="sports" />} />
            <Route path="/technology" element={<News setprogress={this.setprogress} key="technology" country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

