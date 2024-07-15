const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'recipedb',
});

const connectCassandra = async () => {
    try {
        await client.connect();
        console.log('Cassandra connected');
    } catch (err) {
        console.error('Cassandra connection error:', err);
        process.exit(1);
    }
};

module.exports = { client, connectCassandra };
