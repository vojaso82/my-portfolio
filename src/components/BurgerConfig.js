import { slide as Menu } from 'react-burger-menu';


let styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
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
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      height: '50%'

    },
    bmMorphShape: {
      fill: '#373a47'
     
    },
    bmItemList: {
      color: 'white',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      height: '90%'

    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.07)'
    }
  }
  

  export default styles;