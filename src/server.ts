import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import routes from "./routes";

const app = express();
const port = process.env.PORT;
const message = `server running on port ${port}`

mongoose.connect('mongodb://root:example@localhost:27017');

app.use(express.json());
app.use(routes);


app.listen(port, () => {
    console.log(message);
})
