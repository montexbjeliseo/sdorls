import { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import userData from "@/assets/USER_DATA.json";
import style from "@/styles/tablepage.module.css";

export const TablePage = () => {
  const data = useMemo(() => userData, []);

  const columns = useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "First name",
        accessorKey: "first_name",
      },
      {
        header: "Last Name",
        accessorKey: "last_name",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        Header: "Gender",
        accessorKey: "gender",
      },
      {
        header: "University",
        accessorKey: "university",
      },
    ],
    []
  );

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    
    
  });

  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            // Apply the header row props
            <tr key={headerGroup.id}>
              {
                // Loop over the headers in this header group
                headerGroup.headers.map((header) => (
                  <th colSpan={header.colSpan} key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))
              }
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody>
          {
            // Loop over the table rows
            tableInstance.getPaginationRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {
                    // Loop over the rows cells
                    row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div>
        <button
          onClick={() => tableInstance.firstPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {"First page"}
        </button>
        <button
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {"Previous page"}
        </button>
        <button
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          {"Next page"}
        </button>
        <button
          onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}
          disabled={!tableInstance.getCanNextPage()}
        >
          {"Last page"}
        </button>
        <select
          value={tableInstance.getState().pagination.pageSize}
          onChange={(e) => {
            tableInstance.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <div>
          Paginas: {tableInstance.getPageCount()}
        </div>
        <div>
          Pagina actual: {tableInstance.getState().pagination.pageIndex + 1}
        </div>
      </div>
    </>
  );
};
