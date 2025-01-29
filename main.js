import express from 'express';
import authRouter from './routes/Auth.js';

const app = express();

app.use('/auth/', authRouter);

app.listen(3000, () => {
    console.log(`Locker backend started on port 3000`);
});