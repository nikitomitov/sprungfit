import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const buttonWithBackground = props => {
  return (
    <TouchableOpacity 
            style={[styles.defaultButton, props.style]} 
            onPress={props.onPress}>
        <Text style={[styles.defaultText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default buttonWithBackground;

const styles = StyleSheet.create({
    defaultButton: {
        width: "70%",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#6070EE',
    },
    defaultText: {
        color: 'white',
        fontWeight: 'bold',
    }
})