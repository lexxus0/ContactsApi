import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';

const router = Router();

router.use('/api/v1/contacts', contactsRouter);
router.use('/api/v1/auth', authRouter);

export default router;
