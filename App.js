/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import codePush from 'react-native-code-push'
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
 componentDidMount(){
  codePush.sync({
    updateDialog: false,
    installMode: codePush.InstallMode.IMMEDIATE,
    mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
    //deploymentKey为刚才生成的,用Platform判断下平台
    deploymentKey: Platform.OS === 'ios'?'ke00zHdooD2aUUwLddS8RnKpOTD1a5fe1ca0-13e9-409f-941d-f964353f11e1':'tN_dvWkXKQxaUSv2sstiN6GpzKSea5fe1ca0-13e9-409f-941d-f964353f11e1',
    });

 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>what are you talking about?</Text>
        <Text style={styles.instructions}>Hello word aaaaaaaaaaaaaaa</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
