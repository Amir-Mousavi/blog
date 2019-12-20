import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PostItem = ({ post, deletePost }) => {
  const onDeletePost = () => {
    if (window.confirm("Are you sure?")) {
      deletePost(post.id);
    }
  };
  return (
    <div className="postItem">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <footer>
        <button onClick={onDeletePost}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </footer>
    </div>
  );
};

export default PostItem;
