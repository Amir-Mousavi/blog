import styled from "styled-components";

export const PostListRoot = styled.div`
  padding: 20px;

  .postItem {
    padding: 10px;
    margin: 10px;
    box-shadow: 2px 2px 4px #000;

    footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        cursor: pointer;
        background: none;
        outline-style: none;
        border: none;
        font-size: 16px;
        color: red;
      }

      button:hover {
        color: #333;
      }
    }
  }
`;

export const PostHeader = styled.div`
  background: #333;
  padding: 20px;
  color: #eee;
  border-radius: 5px;
  margin: 10px 25px;
`;

export const PaginationRoot = styled.div`
  background: #eee;
  margin: 5px 25px;
  padding: 10px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  font-size: 18px;

  .page {
    margin: 0 5px;
  }

  button {
    cursor: pointer;
    margin: 0 10px;
    font-size: 16px;
    color: #212121;
  }

  button:disabled {
    color: slategray;
    opacity: 0.8;
  }
`;
