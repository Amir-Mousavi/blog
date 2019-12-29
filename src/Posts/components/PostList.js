import React from "react";
import PostItem from "./PostItem";
import { PostListRoot } from "./styled.components";

const PostList = ({ posts, ...props }) => (
  <PostListRoot>
    {posts.map(post => (
      <PostItem {...props} key={post.id} post={post} />
    ))}
  </PostListRoot>
);

export default PostList;
