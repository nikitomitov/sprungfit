import React from 'react';
import {StyleSheet, Text} from 'react-native';

const headingText = props => (
    <Text    
    {...props}
    style={[styles.headingText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    headingText: {
        fontSize: 28,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        color: 'black'
    }
});

export default headingText;