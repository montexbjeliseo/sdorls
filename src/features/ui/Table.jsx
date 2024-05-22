import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import PropTypes from "prop-types";
import style from "./styles/table.module.css";
import { Pagination } from "./TablePagination";

export const Table = ({
  data,
  columns,
  loading,
  onPaginationChange,
  pageCount,
  pagination,
}) => {
  const tableInstance = useReactTable({
    data,
    columns,
    manualPagination: true,
    onPaginationChange: onPaginationChange,
    state: { pagination },
    pageCount: pageCount,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th colSpan={header.colSpan} key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getPaginationRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination tableLib={tableInstance} />
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  loading: PropTypes.bool,
  onPaginationChange: PropTypes.func,
  pageCount: PropTypes.number,
  pagination: PropTypes.object,
};
