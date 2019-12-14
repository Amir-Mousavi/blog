import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/postsAction";

import PostList from "./components/PostList";
import { PostHeader } from "./components/styled.components";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <PostHeader>
          <h1>Posts</h1>
        </PostHeader>
        <PostList posts={posts} />;
      </div>
    );
  }
}

const mapStateToProps = ({ posts, fetching, error }) => ({
  posts,
  fetching,
  error
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
