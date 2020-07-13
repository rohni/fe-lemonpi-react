import React from 'react';

export default function TableHeader() {
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
