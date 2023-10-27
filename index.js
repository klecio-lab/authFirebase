const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const CurriculoRoutes = require('./routes/curriculoRoutes.js');
const AuthRoutes = require('./routes/authRoutes.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/curriculos', CurriculoRoutes);
app.use('/auth', AuthRoutes);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});