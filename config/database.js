const mongoose = require('mongoose');

const CONNECTION = process.env.CONNECTION_URI;
mongoose.connect(CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});