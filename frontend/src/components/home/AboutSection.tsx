import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutSection: React.FC = () => (
  <Box sx={{ py: 6, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>About HomeTribe</Typography>
    <Typography>
      HomeTribe helps families stay organized, connected, and on top of daily life.
    </Typography>
  </Box>
);

export default AboutSection;