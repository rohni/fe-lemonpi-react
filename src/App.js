import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';
import Table from './components/table/table';

const advertisersUrl = 'https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertisers';
const advertisersStatsUrl =
  'https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertiser-statistics';

function App() {
  const [advertisers, setAdvertisers] = useState({ data: [], error: false, loading: true });
  const [stats, setStats] = useState({ data: [], error: false, loading: true });

  useFetch(advertisers, setAdvertisers, advertisersUrl);
  useFetch(stats, setStats, advertisersStatsUrl);

  const [displayData, setDisplayData] = useState(advertisers.data);

  useEffect(() => {
    // allow displaying advertiser data even if stats are not in, and ensure
    // that the display is updated when the stats arrive
    setDisplayData(
      advertisers.data.map((row) => {
        const adStats = stats.data.find((st) => st.advertiserId === row.id);
        return {
          ...row,
          impressions: adStats && adStats.impressions,
          clicks: adStats && adStats.clicks,
        };
      }),
    );
  }, [advertisers, stats]);

  const columns = [
    { display: 'Name', classes: '' },
    { display: 'Date Created', classes: 'date' },
    { display: '# Campaigns', classes: 'number' },
    { display: 'Impressions', classes: 'number' },
    { display: 'Clicks', classes: 'number' },
  ];

  return (
    <Table
      title="Overview of Advertisers"
      error={advertisers.error}
      loading={advertisers.loading}
      dataList={displayData}
      columns={columns}
    />
  );
}

export default App;
