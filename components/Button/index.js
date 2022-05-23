import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ label, action }) => {
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
  

export default Button;