import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import UserListItem from './UserListItem';

const usersList = props => {
    if (!props.users) 
        return <ActivityIndicator/>;

    return <FlatList 
            data={props.users.map(user => { return {...user, key: ''+user.id} }) }
            renderItem={ ({item}) => 
             <UserListItem {...item} 
             onFollowUser={() => props.onFollowUser(item.id)} /> 
            } /> 
};

export default usersList;