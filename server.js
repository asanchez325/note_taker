const express = require('express');
const fs = require("fs");
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express ();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });