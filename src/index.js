
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('.'));


app.listen(8080, () => {
    console.log('movie is running... 8080')
});

const rootRoutes = require('./routes/index.routes');
app.use('/api', rootRoutes);