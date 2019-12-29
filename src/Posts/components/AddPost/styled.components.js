import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  .header {
    margin-bottom: 10px;
  }

  .body {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
    }
  }

  .footer {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      cursor: pointer;
      margin-right: 5px;
    }
  }
`;

export const AddWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;

  button {
    background: green;
    color: white;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    padding: 5px 10px;
    outline-style: none;
  }

  button:hover {
    background: #333;
    color: #eee;
  }
`;
