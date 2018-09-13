import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import ButtonWithBackground from "../ButtonWithBackground/ButtonWithBackground";
import TextWithIcon from "../TextWithIcon/TextWithIcon";

class PostListItem extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
          <View style={styles.postDescription}>
            <Text style={styles.postTitle}>{this.props.username}</Text>
            <TextWithIcon 
              icon="md-text" 
              iconSize={20} 
              text={this.props.text} />
            <TextWithIcon
              icon="md-time"
              iconSize={20}
              text={this.props.timestamp}/>
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
  postDescription: {
    padding: 10,
    width: "100%"
  },
  postTitle: {
    fontSize: 17,
    fontWeight: "bold",
    width: "100%",
    marginBottom: 15
  },
});

export default PostListItem;
