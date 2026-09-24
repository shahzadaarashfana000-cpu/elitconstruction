import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

router.get('/', async (_req, res) => {
  const dbState = mongoose.connection.readyState;
  const states: Record<number, string> = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };

  res.json({
    success: true,
    status: 'ok',
    service: 'elite-mind-construction-api',
    database: states[dbState] || 'unknown',
    timestamp: new Date().toISOString(),
  });
});

export { router as healthRoutes };
