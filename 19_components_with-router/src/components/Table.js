import { Fragment } from 'react';

const Table = ({ keyFn, config, data }) => {
  const headersToRender = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const rowsToRender = data.map((row) => {
    const cellsToRender = config.map((column) => {
      return (
        <td key={column.label} className="p-1">
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr key={keyFn(row)} className="border-b">
        {cellsToRender}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-3">
      <thead>
        <tr className="border-b-2">{headersToRender}</tr>
      </thead>
      <tbody>{rowsToRender}</tbody>
    </table>
  );
};

export default Table;
