import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal500, tealA400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
    accent1Color: tealA400
  }
});

const contentStyle = {
  padding: '20px'
  
};
const textFieldStyle = {
  display: 'block',
  width: '100%'
};
const buttonStyle = {
  marginTop: '20px'
};

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Material Example" onLeftIconButtonTouchTap={()=> this._toggleDrawer()}/>
          <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={()=> this._toggleDrawer()}>
            <List>
              <ListItem>First Item</ListItem>
              <ListItem>Second Item</ListItem>
              <ListItem>Third Item</ListItem>
            </List>
          </Drawer>
          <div style={contentStyle}>
            <form action="">
              <TextField id = "email"floatingLabelText="Email" type="email" style={textFieldStyle}/>
              <TextField id = "password"floatingLabelText="Password" type= "password"style={textFieldStyle}/>
              <RaisedButton fullWidth={true} label="login" secondary={true} style={buttonStyle}/>
            </form>
          </div>
        </div>
        
      </MuiThemeProvider>
    );
  }
}

export default App;
