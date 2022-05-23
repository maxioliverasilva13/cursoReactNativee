/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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

const App = () => {
  const [state,setState] = useState(0);

  const handleIncrement = () => {
    setState(state + 1);
  };

  const handleDecrement = () => {
    setState(state - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Button action={handleDecrement} label="-" />
        <View style={styles.contentContainer}>
          <Text style={styles.counter}>{state}</Text>
        </View>
        <Button action={handleIncrement} label="+" />
      </View>
    </View>
  );
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
