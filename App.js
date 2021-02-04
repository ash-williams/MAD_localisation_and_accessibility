import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { t, getLanguage } from './locales';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    getLanguage();
    this.setState({isLoading: false});
  }

  render(){
    if(this.state.isLoading){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }else{
      return (
        <View>
          <Text>{t('welcome_text')}</Text>
        </View>
      );
    }
  }
}

export default App;