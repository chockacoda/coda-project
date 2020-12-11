const express = require('express');
var cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


const authRoute = require('./routes/auth');

app.use('/api', authRoute);

app.listen(3000, () => console.log(`Server is running on 3000 on chocka's mac`));