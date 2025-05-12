import express from 'express';

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 





app.get ('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}!`);
});

