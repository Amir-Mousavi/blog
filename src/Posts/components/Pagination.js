import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PaginationRoot } from "./styled.components";

const Pagination = ({ page = 1, limit, onPageChange, count }) => {
  const onNextClick = () => onPageChange(page + 1);
  const onPrevClick = () => onPageChange(page - 1);
  return (
    <PaginationRoot>
      <button disabled={page === 1} onClick={onPrevClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="page">{page}</div>
      <button disabled={page * limit > count} onClick={onNextClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </PaginationRoot>
  );
};

export default Pagination;
