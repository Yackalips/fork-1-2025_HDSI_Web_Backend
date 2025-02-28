import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve()));

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

{
    questions[1].askQuestion();
}