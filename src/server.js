const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Le dice a Express que sirva tu HTML y tu JS del front-end
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});