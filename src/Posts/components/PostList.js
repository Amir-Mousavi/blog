import React from "react";
import PostItem from "./PostItem";
import { PostListRoot } from "./styled.components";

const PostList = ({ posts, deletePost, editPost }) => (
  <PostListRoot>
    {posts.map(post => (
      <PostItem
        editPost={editPost}
        key={post.id}
        deletePost={deletePost}
        post={post}
      />
    ))}
  </PostListRoot>
);

export default PostList;
