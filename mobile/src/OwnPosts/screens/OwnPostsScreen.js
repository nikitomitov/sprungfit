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
import Prompt from 'react-native-prompt-crossplatform';
import { getPosts, addPost } from '../../Common/actions/posts';
import DefaultContainer from '../../Common/components/DefaultContainer/DefaultContainer';
import PostsList from '../../Common/components/PostList/PostsList';
import ButtonWithBackground from "../../Common/components/ButtonWithBackground/ButtonWithBackground";


class OwnPostsScreen extends Component {

    state = {
        promptVisible: false,
        newPost: ''
    }

    componentDidMount() {
        this.props.getPosts();
    }

    showAddPost = () => {
        this.setState({ promptVisible: true });
    }

    addPost = text => {
        this.props.onAddPost(this.state.newPost);
        this.setState({ promptVisible: false, newPost: '' });
    }

    render() {
        return this.props.isLoading ? 
          <ActivityIndicator /> :
        (
            <DefaultContainer style={styles.container}>
                <ButtonWithBackground 
                     title="Add post" 
                     onPress={this.showAddPost}/>

                <Prompt title='Add New Post'
                    isVisible={this.state.promptVisible}
                    inputPlaceholder="Enter post content..."
                    onChangeText={(text) => {
                        this.setState({ newPost: text });
                    }}
                    onBackButtonPress={() => this.setState({promptVisible: false, newPost: ''})}
                    onCancel={() => this.setState({promptVisible: false, newPost: ''})}
                    onSubmit={ text => this.addPost(text) }/> 

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
        getPosts: () => dispatch(getPosts('own')),
        onAddPost: newPost => dispatch(addPost(newPost))
    };
}

const mapStateToProps = state => {
    return {
        isLoading : state.ui.isLoading,
        posts: state.posts.ownPosts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnPostsScreen);
