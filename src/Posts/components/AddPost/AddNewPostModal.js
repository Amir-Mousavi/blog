import React, { useState } from "react";
import uuid from "uuid/v1";
import Modal from "react-modal";

import { ModalWrapper, AddWrapper } from "./styled.components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const AddNewPostModal = ({ addPost }) => {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [userId, setUserId] = useState(null);

  const onTitleChange = ({ target: { value } }) => setTitle(value);
  const onBodyChange = ({ target: { value } }) => setBody(value);
  const onUserIdChange = ({ target: { value } }) => setUserId(value);
  const onSaveClick = () => {
    hideModal();

    const postObject = {
      title,
      body,
      userId,
      id: uuid()
    };

    addPost(postObject);
  };

  const showModal = () => setOpen(true);
  const hideModal = () => {
    setUserId(null);
    setTitle(null);
    setBody(null);
    setOpen(false);
  };
  const isSaveButtonDisabled = () => !title || !userId || !body;

  return (
    <AddWrapper>
      <button onClick={showModal}>ADD</button>
      <Modal style={customStyles} onRequestClose={hideModal} isOpen={isOpen}>
        <ModalWrapper>
          <div className="header">
            <h3>ADD A NEW POST</h3>
          </div>
          <div className="body">
            <input
              value={userId}
              onChange={onUserIdChange}
              placeholder="user id..."
              type="text"
            />
            <input
              value={title}
              onChange={onTitleChange}
              placeholder="title..."
              type="text"
            />
            <textarea
              value={body}
              onChange={onBodyChange}
              placeholder="body..."
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="footer">
            <button onClick={hideModal}>CANCEL</button>
            <button onClick={onSaveClick} disabled={isSaveButtonDisabled()}>
              SAVE
            </button>
          </div>
        </ModalWrapper>
      </Modal>
    </AddWrapper>
  );
};

export default AddNewPostModal;
