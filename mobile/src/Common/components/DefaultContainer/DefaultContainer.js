import React from 'react';
import { StyleSheet, View, ActivityIndicator, Image, Dimensions } from 'react-native';


const defaultContainer = props => {
    const content = !props.isLoading ? props.children : null;
    return (
        <View style={[styles.container, props.style]}>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,   
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: 'white'
    }
   
});

export default defaultContainer;