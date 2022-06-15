const app = require('./server');
const { config } = require('../config');
const mongoose = require('mongoose');

const PORT = config.port || 3000;
const CONNECTION_URL = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;


//Mongodb connection
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
}).catch((error) => {
    console.log(`${error} -> DID NOT CONNECT!`);
})



