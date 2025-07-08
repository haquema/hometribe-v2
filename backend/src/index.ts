import 'dotenv/config';
import express from 'express';
import prisma from '../utils/prisma';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
  
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Test Prisma DB connection on server start
async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Successfully connected to the database!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error);
    process.exit(1);
  }
}

startServer();
