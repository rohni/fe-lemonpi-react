import React from 'react';
import TableHeader from './tableHeader';
import MessageRow from './messageRow';
import DataRow from './dataRow';

export default function Table({ loading, error, dataList, columns, title }) {
  return (
    <div className="Table">
      <h3>{title}</h3>
      <table>
        <TableHeader columns={columns} />
        <tbody>
          {loading ? (
            <MessageRow spans={columns.length} message="Loading..." />
          ) : error ? (
            <MessageRow spans={columns.length} message="Could not load data :-(" />
          ) : (
            dataList.map((row) => <DataRow key={row.id} row={row} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
