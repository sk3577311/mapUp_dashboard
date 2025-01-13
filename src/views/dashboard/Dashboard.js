import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import SalesOverview from './components/SalesOverview';
import ProductPerformance from './components/ProductPerformance';
import MonthlyEarnings from './components/MonthlyEarnings';


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} lg={6}>
            <MonthlyEarnings />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
