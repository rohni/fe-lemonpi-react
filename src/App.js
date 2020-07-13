import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';
import Table from './components/table/table';
import {
  compareDates,
  compareLengths,
  compareNumbers,
  compareStrings,
} from './utilities/utilities';

const advertisersUrl = 'https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertisers';
const advertisersStatsUrl =
  'https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertiser-statistics';

function App() {
  // fetch and set data from api requests
  const [advertisers, setAdvertisers] = useState({ data: [], error: false, loading: true });
  const [stats, setStats] = useState({ data: [], error: false, loading: true });

  useFetch(advertisers, setAdvertisers, advertisersUrl);
  useFetch(stats, setStats, advertisersStatsUrl);

  // sorting stuff
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(0);

  const sortHandler = (id) => (event) => {
    if (sortColumn !== id) {
      // new column was clicked
      setSortColumn(id);
      setSortDirection(1);
    } else {
      setSortDirection((prev) => (prev + 1) % 3);
    }
  };

  const [displayData, setDisplayData] = useState(advertisers.data);

  const columns = [
    { id: 1, dataName: 'name', display: 'Name', classes: '', compare: compareStrings },
    {
      id: 2,
      dataName: 'createdAt',
      display: 'Date Created',
      classes: 'date',
      compare: compareDates,
    },
    {
      id: 3,
      dataName: 'campaignIds',
      display: '# Campaigns',
      classes: 'number',
      compare: compareLengths,
    },
    {
      id: 4,
      dataName: 'impressions',
      display: 'Impressions',
      classes: 'number',
      compare: compareNumbers,
    },
    { id: 5, dataName: 'clicks', display: 'Clicks', classes: 'number', compare: compareNumbers },
  ];

  const mergeData = () =>
    advertisers.data.map((row) => {
      const adStats = stats.data.find((st) => st.advertiserId === row.id);
      return {
        ...row,
        impressions: adStats && adStats.impressions,
        clicks: adStats && adStats.clicks,
      };
    });

  const sortData = (data) => {
    if (sortDirection === 0 || !sortColumn) {
      return data;
    }
    const column = columns.find((col) => col.id === sortColumn);

    // make a copy of the data, sort sorts in place:
    const newData = [...data];
    // if sort direction is > 0 need to sort
    const sorted = newData.sort(column.compare(column.dataName));
    return sortDirection === 2 ? sorted.reverse() : sorted;
  };

  useEffect(() => {
    // allow displaying advertiser data even if stats are not in, and ensure
    // that the display is updated when the stats arrive
    setDisplayData(sortData(mergeData()));
  }, [advertisers, stats, sortColumn, sortDirection]);

  return (
    <Table
      title="Overview of Advertisers"
      error={advertisers.error}
      loading={advertisers.loading}
      dataList={displayData}
      columns={columns}
      sortHandler={sortHandler}
      sortDirection={sortDirection}
      sortColumn={sortColumn}
    />
  );
}

export default App;
