
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('.'));


app.listen(8000, () => {
    console.log('movie is running...')
});

const rootRoutes = require('./routes/index.routes');
app.use('/api', rootRoutes);