/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import Button from "./components/Button";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Hello = ({children}) => (<Text>{children}</Text>)

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1});
  };

  handleDecrement() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1});
  };

  render() {
    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Button action={this.handleDecrement} label="-" />
          <View style={styles.contentContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
          <Button action={this.handleIncrement} label="+" />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
  },
  subContainer: {
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    fontSize: 25,
    color: "#FFF",
  }
});

export default App;
