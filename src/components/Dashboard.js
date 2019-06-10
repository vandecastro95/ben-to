import React from 'react';
import BentoList from './BentoList';
import BentoListFilters from './BentoListFilters'

const Dashboard = () => (
    <div>
        <BentoListFilters />
        <BentoList />
    </div>
)

export default Dashboard;