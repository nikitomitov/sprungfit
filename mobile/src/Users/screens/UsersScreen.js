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
import { getUsers, followUser } from '../actions/index';
import DefaultContainer from '../../Common/components/DefaultContainer/DefaultContainer';
import UsersList from '../components/UsersList';


class UsersScreen extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    onFollowUser = userId => {
        this.props.followUser(userId);
    }

    render() {
        return this.props.isLoading ? 
          <ActivityIndicator /> :
        (
            <DefaultContainer style={styles.container}>
                <UsersList  users={this.props.users} 
                            onFollowUser={this.onFollowUser} />
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
        getUsers: () => dispatch(getUsers()),
        followUser: userId => dispatch(followUser(userId))
    };
}

const mapStateToProps = state => {
    return {
        isLoading : state.ui.isLoading,
        users: state.users.users,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
