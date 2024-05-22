import PropTypes from "prop-types";

export const Pagination = ({ tableLib}) => {

  console.log(tableLib.getState())

  return (
    <footer className="pagination">
      <button
        disabled={!tableLib.getCanPreviousPage()}
        onClick={() => tableLib.setPageIndex(0)}
      >
        ⏪
      </button>
      <button
        disabled={!tableLib.getCanPreviousPage()}
        onClick={tableLib.previousPage}
      >
        ◀️
      </button>
      <span>{`page ${
        tableLib.getState().pagination.pageIndex + 1
      } of ${tableLib.getPageCount()}`}</span>
      <button disabled={!tableLib.getCanNextPage()} onClick={tableLib.nextPage}>
        ▶️
      </button>
      <button
        disabled={!tableLib.getCanNextPage()}
        onClick={() => tableLib.setPageIndex(tableLib.getPageCount() - 1)}
      >
        ⏩
      </button>
      <span>Show: </span>
      <select
        value={tableLib.getState().pagination.pageSize}
        onChange={(e) => tableLib.setPageSize(parseInt(e.target.value, 10))}
      >
        {[5, 10, 20].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span> items per page</span>
    </footer>
  );
};

Pagination.propTypes = {
  tableLib: PropTypes.object,
};