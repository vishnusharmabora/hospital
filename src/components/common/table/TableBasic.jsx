import { useMemo } from "react";
import { useTable } from "react-table";
import Pagination from "./Pagination/Pagination";

const TableBasic = ({ headers, tableData }) => {
  const COLUMS = useMemo(() => headers, [headers]);
  const Data = useMemo(() => tableData, [tableData]);
  const tableInstance = useTable({
    columns: COLUMS,
    data: Data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <table
        {...getTableProps()}
        className="datatable table table-striped table-bordered dataTable no-footer dtr-inline"
        cellspacing="0"
        width="100%"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default TableBasic;
