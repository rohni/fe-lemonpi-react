import React from 'react';
import { formatDate } from '../../utilities/utilities';

export default function DataRow({ row }) {
  return (
    <tr className="data-row">
      <td>{row.name}</td>
      <td className="date">{formatDate(row.createdAt)}</td>
      <td className="number">{row.campaignIds ? row.campaignIds.length : 0}</td>
      <td className="number">{row.impressions || 'n/a'}</td>
      <td className="number">{row.clicks || 'n/a'}</td>
    </tr>
  );
}
