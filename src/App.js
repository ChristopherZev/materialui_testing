import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  constructor () {
    super();
    this.state ={
      drawerOpened: false
    };
  };

  _toggleDrawer () {
    this.setState ({
      drawerOpened: !this.state.drawerOpened
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Material Example" onLeftIconButtonTouchTap={()=> this._toggleDrawer()}/>
          <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={()=> this._toggleDrawer()}/>
        </div>
        
      </MuiThemeProvider>
    );
  }
}

export default App;
