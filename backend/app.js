const express = require('express');
const bodyParser = require('body-parser');
const connectMongoDB = require('./mongoConnection');
const { connectCassandra } = require('./cassandraConnection');
const mongoRoutes = require('./routes/recipeMongoRoutes');
const cassandraRoutes = require('./routes/recipeCassandraRoutes');

const app = express();
app.use(bodyParser.json());

connectMongoDB();
connectCassandra();

app.use('/mongo', mongoRoutes);
app.use('/cassandra', cassandraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
