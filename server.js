const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

const apiRoutes = require('./Develop/routes/api-routes');
const htmlRoutes = require('./Develop/routes/html-routes');
const fs = require('fs');
const path = require ('path');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});