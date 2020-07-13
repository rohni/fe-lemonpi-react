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

  const displayColumns = ['Name', 'Date Created', '# Campaigns', 'Impressions', 'Clicks'];

  return (
    <Table
      title="Overview of Advertisers"
      error={advertisers.error}
      loading={advertisers.loading}
      dataList={displayData}
      displayColumns={displayColumns}
    />
  );
}

export default App;
