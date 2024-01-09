const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
