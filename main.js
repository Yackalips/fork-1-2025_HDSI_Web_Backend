import express from 'express';

const app = express();

app.use('/auth/', authRouter);

app.listen(3000, () => {
    console.log(`Locker backend started on port 3000`);
});