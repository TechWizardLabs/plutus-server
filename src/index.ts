import 'dotenv/config';
import express, { Request, Response } from 'express';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/health', (req: Request, res: Response) => {
  res.send('Server is running✅');
});

// Server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
