import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PostDetailsScreen = ({route}: any) => {
  const {post} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postBody}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postBody: {
    fontSize: 16,
    color: '#444',
  },
});

export default PostDetailsScreen;
