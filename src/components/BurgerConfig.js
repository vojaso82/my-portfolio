import { slide as Menu } from 'react-burger-menu';

let styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '40px',
      height: '40px',
      right: '40px',
      top: '40px'
    },

    bmBurgerBars: {
      background: 'white'
    },

    bmBurgerBarsHover: {
      background: '#a90000'
    },

    bmCrossButton: {
      height: '24px',
      width: '24px'
    },

    bmCross: {
      background: '#bdc3c7'
    },

    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },

    bmMenu: {
      background: 'rgba(0, 0, 0, 1)',
      padding: '3.5em 1.5em 0',
      fontSize: '1.7em',
      height: '100%'
    },

    bmMorphShape: {
      fill: '#373a47'
    },

    bmItemList: {
      color: 'white',
      padding: '3em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '80%'
    },

    bmItem: {
      display: 'inline-block'
    },

    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.07)'
    }
  }
  

  export default styles;