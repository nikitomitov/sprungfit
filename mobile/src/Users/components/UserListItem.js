import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import ButtonWithBackground from "../../Common/components/ButtonWithBackground/ButtonWithBackground";

class UserListItem extends React.Component {

  render() {

    let button = null;

    if (this.props.isFollowing) {
      button = <ButtonWithBackground 
                            title='Followed' 
                            style={[styles.buttonStyle, styles.followingStyle]}
                            disabled/>
    } else {
      button = <ButtonWithBackground 
                            title='Follow' 
                            style={[styles.buttonStyle, styles.followStyle]}
                            onPress={this.props.onFollowUser} />;
    }

    return (
      <View style={styles.mainContainer}>
          <View style={styles.userDescription}>
            <Text style={styles.userTitle}>{this.props.username}</Text>
            {button}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  userDescription: {
    padding: 10,
    width: "100%"
  },
  userTitle: {
    fontSize: 17,
    fontWeight: "bold",
    width: "100%",
    marginBottom: 15
  },
  buttonStyle: {
    width: '100%'
  },
  followingStyle : {
    backgroundColor: 'grey',
  },
  followStyle: {
    backgroundColor: 'lightgreen',
  }
});

export default UserListItem;
