const express = require ('express')
const {port: APP_PORT, port} = require('./config/config')
const routerApi= require('./routes')
const cors = require('cors');

const app = express()
app.use(cors({
    origin: '*'
}));
app.use(express.json())

routerApi(app)

app.listen(port, () => {
    console.log(`App runing on port ${port}`)
}) 