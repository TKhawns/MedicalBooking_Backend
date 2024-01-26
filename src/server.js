import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import testConnectDb from './config/connectDB';
import cors from 'cors';
require('dotenv').config();

let app = express();
app.use(cors({ credentials: true, origin: true }));
//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

testConnectDb();

let port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log('Backend Medical is running on port: ' + port);
});
