import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800
      } 
    },
    color: {
      value: '#458cb4'
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000'
      },
      polygon: {
        nb_sides: 6
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      }
    },
    size: {
      value: 160,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: '#ffffff',
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 8,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    interactivity: {  
      detect_on: 'canvas',
      events: {  
        onhover: {  
          enable: false,
          mode: 'grab'
        },
        onclick:{  
          enable: false,
          mode: 'push'
        },
        resize: true
      },
      modes: {  
        grab: {  
          distance: 400,
          line_linked: {  
            opacity: 1
          }
        },
        bubble: {  
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {  
          distance: 200,
          duration: 0.4
        },
        push: {  
          particles_nb: 4
        },
        remove: {  
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          {/*<FaceRecognition />*/ }
      </div>
    );
  }
}

export default App;
