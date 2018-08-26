import React, { Component } from 'react';
import MainContainer from './MainContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;
