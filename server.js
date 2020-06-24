const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
    res.sendFile('./build/index.html')
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})