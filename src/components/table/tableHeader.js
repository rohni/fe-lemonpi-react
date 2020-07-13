import React from 'react';

export default function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map(({ display, classes }) => (
          <th className={classes}>{display}</th>
        ))}
      </tr>
    </thead>
  );
}
