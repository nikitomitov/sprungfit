import React, {Component} from 'react';
import { 
    View, 
    Text, 
    Button, 
    TextInput, 
    StyleSheet, 
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions
} from 'react-native';


import DefaultInput from '../../../Common/components/DefaultInput/DefaultInput';
import MainText from '../../../Common/components/MainText/MainText';
import ButtonWithBackground from '../../../Common/components/ButtonWithBackground/ButtonWithBackground';
import DefaultContainer from '../../../Common/components/DefaultContainer/DefaultContainer';

import { connect } from 'react-redux';
import { tryAuth } from '../../actions/auth';


class Auth extends Component {

    state = {
        username : '',
        password: ''
    }

    login = () => {
        const authData = {
            username: this.state.username,
            password: this.state.password,
        };
        
        this.props.onTryAuth(authData);
    };

    toRegister = () => {
        this.props.navigator.push({
            screen: 'demo.RegisterScreen',
            navigatorStyle: {
	  	        navBarHidden: true
	        }            
        });
    }

   
    render() {
        const button = <ButtonWithBackground
                             title='Login' 
                             onPress={this.login}
                             style={styles.loginButton}
                             textStyle={styles.buttonText} />;

        let loginButton = this.props.isLoading ? <ActivityIndicator /> : button;

        return (
            <DefaultContainer style={styles.container}>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder='Username'                         
                        onChangeText={(val) => this.setState({username: val})}
                        value={this.state.username}/>

                    <DefaultInput placeholder='Password'                                          
                                value={this.state.password} 
                                onChangeText={(val) => this.setState({password: val})}
                                secureTextEntry />
                </View>

                {loginButton}

                <ButtonWithBackground
                             title='Register' 
                             onPress={this.toRegister}
                             style={styles.loginButton}
                             textStyle={styles.buttonText} />
                
            </DefaultContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEFF3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButton: {
        marginVertical: 20,
    },
    inputContainer: {
        width: "80%"
    },
    buttonText: {
        fontSize: 20,
    }
});

const mapStateToProps = (state) => {
    return {
        isLoading : state.ui.isLoading
    }
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAuth: authData => dispatch(tryAuth(authData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);