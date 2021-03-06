import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPosts,
  deletePostAndFetch,
  editPostAndFetch,
  addPostAndFetch
} from "./actions/postsAction";

import PostList from "./components/PostList";
import { PostHeader } from "./components/styled.components";
import Pagination from "./components/Pagination";
import AddNewPostModal from "./components/AddPost/AddNewPostModal";

class PostsContainer extends Component {
  state = { _limit: 5, _page: 1 };
  componentDidMount() {
    this.fetchPosts();
  }

  get filters() {
    const { _limit, _page } = this.state;

    return { _limit, _page };
  }

  fetchPosts = () => this.props.fetchPosts(this.filters);

  onPageChange = newPage => this.setState({ _page: newPage }, this.fetchPosts);

  deletePost = id => {
    const { filters } = this;
    const { deletePostAndFetch } = this.props;

    deletePostAndFetch(id, filters);
  };

  editPost = postObject => {
    const { editPostAndFetch } = this.props;
    const { filters } = this;

    editPostAndFetch(postObject, filters);
  };

  addPost = postObject => {
    const { addPostAndFetch } = this.props;
    const { filters } = this;

    addPostAndFetch(postObject, filters);
  };

  render() {
    const { posts, count } = this.props;
    const { _page, _limit } = this.state;
    const { onPageChange, deletePost, editPost, addPost } = this;

    const PaginationComponent = (
      <Pagination
        count={count}
        onPageChange={onPageChange}
        page={_page}
        limit={_limit}
      />
    );
    return (
      <div>
        <PostHeader>
          <h1>Posts</h1>
        </PostHeader>
        <AddNewPostModal addPost={addPost} />
        {PaginationComponent}
        <PostList editPost={editPost} deletePost={deletePost} posts={posts} />
        {PaginationComponent}
      </div>
    );
  }
}

const mapStateToProps = ({ posts, fetching, error, count }) => ({
  posts,
  fetching,
  error,
  count
});

const mapDispatchToProps = {
  fetchPosts,
  editPostAndFetch,
  addPostAndFetch,
  deletePostAndFetch
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
