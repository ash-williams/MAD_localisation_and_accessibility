import React, { Component } from 'react';

import { AppearanceProvider } from 'react-native-appearance';

import Screen from './components/screen.js';


class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <AppearanceProvider>
        <Screen />
      </AppearanceProvider>
    );
  }
}

export default App;