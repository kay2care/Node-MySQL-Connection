const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

app.get('/api/:query', async (req, res) => {
    try {
        res.json({ data: await db.getAll(req.params.query) });
    }
    catch (err) { res.json({ error: err }) }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Connected!");
});