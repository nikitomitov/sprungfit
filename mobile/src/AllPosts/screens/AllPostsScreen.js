import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    ToastAndroid
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { getPosts } from '../../Common/actions/posts';
import DefaultContainer from '../../Common/components/DefaultContainer/DefaultContainer';
import PostsList from '../../Common/components/PostList/PostsList';


class AllPostsScreen extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return this.props.isLoading ? 
          <ActivityIndicator /> :
        (
            <DefaultContainer style={styles.container}>
                <PostsList posts={this.props.posts} />
            </DefaultContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEFF3',
        paddingHorizontal: 10,
    }
});


const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts('feed')),
    };
}

const mapStateToProps = state => {
    return {
        isLoading : state.ui.isLoading,
        posts: state.posts.feedPosts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPostsScreen);
