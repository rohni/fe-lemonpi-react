import React from 'react';

export default function TableHeader({ columns, sortDirection, sortColumn, sortHandler }) {
  const sortDisplay = ['sort', 'sort-up', 'sort-down'];

  return (
    <thead>
      <tr>
        {columns.map(({ id, display, classes }) => {
          const sortClass = sortColumn === id ? sortDisplay[sortDirection] : 'sort';
          const fullClasses = [classes, sortClass].join(' ');
          return (
            <th className={fullClasses} onClick={sortHandler(id)}>
              {display}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
