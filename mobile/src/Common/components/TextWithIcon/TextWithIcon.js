import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class TextWithIcon extends Component {
    render() {
        return (
            <View style={[styles.info, this.props.style]}>
              <Icon name={this.props.icon} 
                size={this.props.iconSize} 
                color="lightgrey" />
              <Text style={[styles.text, {lineHeight: this.props.iconSize}]}>
                {this.props.text}
              </Text>
              {this.props.children}
            </View>
        );
    }
}

export default TextWithIcon;

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    margin: 5
  },
  text: {
    marginLeft: 5,
  }
});