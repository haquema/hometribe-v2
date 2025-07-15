import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

const features = [
  { title: 'Shared Calendar', desc: 'Keep everyone on the same page.' },
  { title: 'Task Management', desc: 'Assign and track chores easily.' },
  { title: 'Secure Messaging', desc: 'Private, family-only chat.' },
];

const FeaturesSection: React.FC = () => (
  <Box sx={{ py: 6 }}>
    <Typography variant="h4" align="center" gutterBottom>Features</Typography>
    <Grid container spacing={3} justifyContent="center">
      {features.map((f, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6">{f.title}</Typography>
            <Typography>{f.desc}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default FeaturesSection;