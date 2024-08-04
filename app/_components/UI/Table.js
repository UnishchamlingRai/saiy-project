// components/Table.js

import React from "react";
import TableRow from "./TableRow";

const Table = ({ children, tableHeaders }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full border bg-gray-50">
        <thead>
          <tr className="bg-gray-100">
            {tableHeaders.map((head) => (
              <th className="border-b px-4 py-2 text-start">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-y-auto">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
