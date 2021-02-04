import React from 'react';
import { Text, View } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

const colorSchemes = {
  light: {
    background: '#FFFFFF',
    primary: '#512DA8',
    text: '#121212',
    error: '#D32F2F',   
  },
  dark: {
    background: '#121212',
    primary: '#B39DDB',
    text: '#FFFFFF',
    error: '#EF9A9A',
  },
};

const Screen = () => {
  const colorScheme = useColorScheme(); // light, dark, or no-preference
  const colors = colorSchemes[colorScheme] || colorSchemes.light;

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: colors.text, fontSize: 24 }}>
        Hello World
      </Text>
      <Text style={{ color: colors.text }}>
        color scheme: {colorScheme}
      </Text>
    </View>
  );
}

export default Screen;
