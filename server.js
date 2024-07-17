const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Have a greatday to ECLAT ENGINEERS!!");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
