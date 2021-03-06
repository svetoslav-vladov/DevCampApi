const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5500;
const ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`));
