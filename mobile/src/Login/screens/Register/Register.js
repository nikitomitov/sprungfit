import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { tryRegister } from "../../actions/auth";

import DefaultContainer from "../../../Common/components/DefaultContainer/DefaultContainer";
import DefaultInput from "../../../Common/components/DefaultInput/DefaultInput";
import HeadingText from "../../../Common/components/HeadingText/HeadingText";
import ButtonWithBackground from "../../../Common/components/ButtonWithBackground/ButtonWithBackground";


class RegisterScreen extends Component {
  state = {
    username: "",
    password: "",
  };


  register = async () => {
    this.props.onRegister({...this.state});
  };

  updateData = (field, value) => {
    this.setState({
      ...this.state,
      [field] : value
    });
  }

  render() {    
    return (
      <DefaultContainer style={styles.container}>
        <DefaultInput
          placeholder="Username"
          inputStyle={styles.input}
          icon="user"
          value={this.state.username} 
          onChangeText={val => this.updateData("username", val)}/>

        <DefaultInput
          placeholder="Password"
          inputStyle={styles.input}
          icon="lock"
          value={this.state.password}
          onChangeText={val => this.updateData("password", val)}
          secureTextEntry />

        {this.props.isLoading ? 
          <ActivityIndicator /> :
          <TouchableOpacity 
              style={styles.finishContainer} 
              onPress={this.register}>

            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity> 
        }
      </DefaultContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRegister: regData => dispatch(tryRegister(regData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  input: {
    color: 'black'
  },
  registerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  finishContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    backgroundColor: '#6070EE',
    marginTop: 40
  }
});