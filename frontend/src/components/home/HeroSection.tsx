import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection: React.FC = () => (
  <Box sx={{ py: 8, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
    <Typography variant="h2" gutterBottom>Welcome to HomeTribe</Typography>
    <Typography variant="h5" gutterBottom>Your all-in-one family organizer</Typography>
    <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
      Get Started
    </Button>
  </Box>
);

export default HeroSection;