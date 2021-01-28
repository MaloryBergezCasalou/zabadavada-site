//Path
const path = require("path");
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../public'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

let port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
});

