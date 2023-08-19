import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {fetchPostsRequest} from './actions/postActions';
import {useNavigation} from '@react-navigation/native';

const PostListScreen = ({posts, loading, error, fetchPostsRequest}: any) => {
  const navigation = useNavigation();

  useEffect(() => {
    fetchPostsRequest();
  });

  const handleRefresh = () => {
    fetchPostsRequest();
  };

  const renderPostItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.postItem}
      // @ts-expect-error
      onPress={() => navigation.navigate('PostDetails', {post: item})}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
        <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
          <Text style={styles.refreshButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={item => String(item.id)}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const mapStateToProps = (state: {
  posts: {posts: any; loading: any; error: any};
}) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps, {fetchPostsRequest})(PostListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  postItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  postBody: {
    fontSize: 14,
    color: '#444',
  },
  refreshButton: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  refreshButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
