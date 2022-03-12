const express = require('express');

const app = express();
const htmlRoutes = require('./Develop/routes/html-routes');
const apiRoutes= require('./Develop/routes/api-routes');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });