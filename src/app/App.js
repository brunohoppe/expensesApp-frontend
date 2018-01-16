import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import Midle from '../components/Midle';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

//Constants
let h = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.requestChange = this.requestChange.bind(this);
  }
  componentDidMount () {
    console.log('react rocks!!')

  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  requestChange = (open) => {
    this.setState(open);
  } 

  render() {
    return (
      h(MuiThemeProvider, null,
        h('div', {className: 'main-container'},
          h(Header, {
            handleToggle: this.handleToggle
          }),
          h(Midle, {
            openMenu: this.state.open, 
            handleClose: this.handleClose, 
            requestChange: this.requestChange
          })
        ),
      )
    );
  }
}

export default App;
