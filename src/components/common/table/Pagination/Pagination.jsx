import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const Pagination = () => {
  const handlePageClick = (event) => {
    console.log(event);
  };
  return (
    <ReactPaginate
      className="paginations"
      pageClassName="paginate_button"
      breakClassName="paginate_button"
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={10}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
