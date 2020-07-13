import React from 'react';

export default function MessageRow({ spans, message }) {
  return (
    <tr>
      <td colSpan={spans}>{message}</td>
    </tr>
  );
}
