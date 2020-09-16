import React, { Component } from 'react';
import './App.css';
import UncontrolledLottie from './components/UncontrolledLottie';
import UncontrolledLottie2 from './components/UncontrolledLottie2';
import ControlledLottie from './components/ControlledLottie';
import ControlledLottie2 from './components/ControlledLottie2';
import YoutubeVideo from './components/YoutubeVideo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey, Pawan here, this is an example of REACT LOTTIES</h1>
        <div className="lotties">
          <UncontrolledLottie2 />
          {/* <ControlledLottie /> */}
          <ControlledLottie2 />
        </div>

        {/* <iframe src='https://youtu.be/6_pru8U2RmM'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>

        <video width="750" height="500" controls >
          <source src="https://youtu.be/6_pru8U2RmM" type="video/mp4" />
        </video> */}

        <YoutubeVideo/>
      </div>
    );
  }
}

export default App;