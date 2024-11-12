import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 50px;
  cursor: pointer;
  list-style: none;

  .page-item {
    padding: 8px 12px;
    border-radius: 50px;
    color: black;
    font-size: 16px;
    text-align: center;
    transition: background-color 0.2s, color 0.2s;

    &:not(.active):hover {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }

  .active {
    font-weight: bold;
    color: white;
    border-radius: 50px;
    background-color: #61d0d0;
  }

  .previous-item,
  .next-item {
    padding: 8px 12px;
    border-radius: 50px;
    font-size: 16px;
    color: #61d0d0;
    background-color: #ffffff;
    margin: 0px 10px;
  }
`;

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <StyledReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"previous-item"}
      nextClassName={"next-item"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
