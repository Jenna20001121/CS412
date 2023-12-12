// app.js
const express = require('express');
const app = express();
const ps4Router = require('./routes/ps4');

app.use('/ps4', ps4Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
