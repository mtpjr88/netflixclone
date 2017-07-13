
import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

// Callback component stores our authentication credentials and redirects
// back to the upload route

class Callback extends Component {
  componentDidMount() {
    setAccessToken(); //Get and store access_token in local storage
    setIdToken();     //Get and store id_token in local storage
    window.location.href = "/";
  }

   render() {
      return null;
    }
}

export default Callback;
