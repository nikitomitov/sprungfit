import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import PostListItem from './PostListItem';

const postsList = props => {
    if (!props.posts) 
        return <ActivityIndicator/>;

    return <FlatList 
            data={props.posts.map(post => { return {...post, key: ''+post.id} }) }
            renderItem={ ({item}) => <PostListItem {...item} /> } /> 
};

export default postsList;