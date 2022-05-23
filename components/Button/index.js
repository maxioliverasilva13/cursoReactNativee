import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

class Button extends Component {
  constructor(props){
      super(props);
      console.log("child contructor");
  };

  componentDidMount(){
    console.log("child componentDidMount");
  };

  shouldComponentUpdate(nextProps, nextState){
    console.log({nextProps, nextState})
    console.log("child shouldComponentUpdate");
    // if i send true , enable the render , else disable the next render
    return true;
  };

  componentDidUpdate(prevProps, prevStates) {
    console.log({prevProps, prevStates})
    //execute after update of state or prop
    console.log("componentDidUpdate");
  };

  componentWillUnmount() {
    //the component is not show in the screen
    console.log("child componentWillUnmount");
  };

  //deprecated
  //componentWillReceiveProps(){
  //  console.log("child componentWillReceiveProps");
  //};

  //deprecated
  //componentWillMount() {
  //    console.log("child componentWillUpdate")
  //};


  //deprecated
  //componentWillUpdate() {
  //    console.log("child componentWillUpdate")
  //};

  render() {
    const { label, action } = this.props;
    return (
    <TouchableOpacity
      onPress={action}
      style={styles.btn}
    >
      <Text style={styles.btnTxt}>
      {label}
      </Text>
    </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  btnTxt: { 
    fontSize: 25,
    color: "#718c8d",
    fontWeight: "bold",
  },
});
  
Button.protoTypes = {
  label: PropTypes.string,
  action: PropTypes.func,  
};

export default Button;