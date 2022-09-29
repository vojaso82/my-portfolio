const ParticlesConfig = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#ebebed"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 5,
        "color": "#6b5aa2"
      },
      "polygon": {
        "nb_sides": 5
      },
    
    },
    "opacity": {
      "value": 0.8286181017543023,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.002,
        "sync": true
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 1.5,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 45,
      "color": "#5d61a7",
      "opacity": 0.9075341114451881,
      "width": 0.7891600969088592
    },
    "move": {
      "enable": true,
      "speed": 0.3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 552.4120678362015,
        "rotateY": 1183.740145363289
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 215.77042027282963,
        "size": 4,
        "duration": 3.516258700742409,
        "opacity": 0.791158207667042,
        "speed": 3
      },
      "repulse": {
        "distance": 327.65137893281536,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default ParticlesConfig;
