const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors());
app.use(fileUpload());

require('./config/database');

const merchandiseRouter = require('./routes/merchandise');
app.use('/', merchandiseRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Port up and listening on port ${port}`));