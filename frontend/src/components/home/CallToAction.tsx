import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const CallToAction: React.FC = () => (
  <Box sx={{ py: 6, textAlign: 'center' }}>
    <Typography variant="h5" gutterBottom>Ready to get started?</Typography>
    <Button variant="contained" color="primary" size="large" href="/register">
      Sign Up Free
    </Button>
  </Box>
);

export default CallToAction;