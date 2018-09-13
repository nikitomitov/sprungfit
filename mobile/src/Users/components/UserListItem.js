import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import ButtonWithBackground from "../../Common/components/ButtonWithBackground/ButtonWithBackground";
import TextWithIcon from "../../Common/components/TextWithIcon/TextWithIcon";

class UserListItem extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
          <View style={styles.userDescription}>
            <Text style={styles.userTitle}>{this.props.username}</Text>
            <Button
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
    width: "60%"
  },
  userTitle: {
    fontSize: 17,
    fontWeight: "bold",
    width: "100%",
    marginBottom: 15
  },
});

export default UserListItem;
