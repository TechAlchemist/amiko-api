const express = require('express');
const morgan = require('morgan')

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

require('./database');

const merchandiseRouter = require('./routes/merchandise');
app.use('/', merchandiseRouter);

app.listen(port, () => console.log(`Port up and listening on port ${port}`));