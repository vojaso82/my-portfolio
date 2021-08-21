import React from 'react'

const ParticlesConfig = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#5564d4"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#312727"
        },
        polygon: {
          nb_sides: 12
        },
        image: {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.polytechnique.edu%2Fen%2Fcontent%2Fstart-ups-lx-are-breaking-all-codes&psig=AOvVaw1rwwSRlVHJurIHShgDSXnL&ust=1629650655625000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKiujfbHwvICFQAAAAAdAAAAABAJ",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.15835576706700122,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 12.501771084236939,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 8.445945945945939,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },
        onclick: {
          enable: false,
          mode: "remove"
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

export default ParticlesConfig;
