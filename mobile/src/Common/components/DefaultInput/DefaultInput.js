import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const defaultInput = props => {
    const errorText = props.hasError ?
    <Text style={styles.errorText}>{props.errorText}</Text> : null;

    let errorStyles = null;
    let errorInputStyles = null;
    let placeholderTextColor = props.placeholderTextColor ? 
        props.placeholderTextColor : 'darkgray';

    if (props.hasError) {
        errorStyles = {borderColor : '#FF891F'};
        errorInputStyles = {color: '#FF891F'};
        placeholderTextColor = '#FF891F';
    }

    const icon = props.icon ? 
    <FontAwesome style={[styles.iconStyle, errorInputStyles]}>
        {Icons[props.icon]}
    </FontAwesome> : null;

    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, props.style, errorStyles]}>
                {icon}
                <TextInput     
                    {...props}
                    style={[styles.input, props.inputStyle, errorInputStyles]}  
                    underlineColorAndroid='transparent'
                    placeholderTextColor={placeholderTextColor}/>
            </View>
            {errorText}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        marginVertical: 7,
        width: '100%'
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#bbb',        
    },
    input: {
        flex:1,
        lineHeight: 20
    },
    iconStyle: {
        color:'#CFD1DD', 
        fontSize: 20, 
        marginTop: 10
    },
    errorText: {
        fontSize: 14,
        color: '#FF891F',
    }
});

export default defaultInput;