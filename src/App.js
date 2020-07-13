import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

const advertisersUrl = 'https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertisers';
const advertisersStatsUrl =
  'https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertiser-statistics';

function AdvertiserList({ advertisers, stats }) {
  return (
    <div>
      <h1>Advertisers</h1>
      <ul>
        {advertisers.map((ad) => (
          <li key={ad.id}>
            <span>ID</span>
            <span>{ad.id}</span>
            <span>Name</span>
            <span>{ad.name}</span>
            <span>campaignIds</span>
            <span>{ad.campaignIds.join(', ')}</span>
          </li>
        ))}
      </ul>
      <ul>
        {stats.map((ad) => (
          <li key={ad.advertiserId}>
            <span>ID</span>
            <span>{ad.advertiserId}</span>
            <span>Impressions</span>
            <span>{ad.impressions}</span>
            <span>Clicks</span>
            <span>{ad.clicks}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  // const advertisers = useFetch(advertisersUrl);
  // const stats = useFetch(advertisersStatsUrl);
  const [advertisers, setAdvertisers] = useState({ data: [], error: false, loading: true });
  const [stats, setStats] = useState({ data: [], error: false, loading: true });

  useFetch(advertisers, setAdvertisers, advertisersUrl);
  useFetch(stats, setStats, advertisersStatsUrl);

  const error = <div>There was an error fetching the resource</div>;
  const loading = <div>Loading...</div>;

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
