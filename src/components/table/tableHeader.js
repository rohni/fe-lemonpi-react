import React, { useState } from 'react';

export default function TableHeader({ columns }) {
  const [sortColumn, setSortColumn] = useState(null);
  // sortDirection can be one of: 'none', 'up', 'down'
  const [sortDirection, setSortDirection] = useState(0);

  const sortDisplay = ['', 'sort-up', 'sort-down'];

  const clicked = (id) => (event) => {
    if (sortColumn !== id) {
      // new column was clicked
      setSortColumn(id);
      setSortDirection(1);
    } else {
      setSortDirection((prev) => (prev + 1) % 3);
    }
  };

  return (
    <thead>
      <tr>
        {columns.map(({ id, display, classes }) => {
          const fullClasses =
            sortColumn === id ? [classes, sortDisplay[sortDirection]].join(' ') : classes;
          return (
            <th className={fullClasses} onClick={clicked(id)}>
              {display}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
