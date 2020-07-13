import React from 'react';

export default function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th className="date">Date Created</th>
        <th className="number"># Campaigns</th>
        <th className="number">Impressions</th>
        <th className="number">Clicks</th>
      </tr>
    </thead>
  );
}
