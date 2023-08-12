import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeModules} from 'react-native';
export default function App() {
  const navigateToNativeScreen = () => {
    NativeModules.NativeScreenModule.navigateToNativeScreen();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={navigateToNativeScreen}>
        <Text>Navigate to Native Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
