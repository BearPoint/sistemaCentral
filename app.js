import express from 'express';
import bodyParser from 'body-parser';
import audioRutas from './rutas/audioRutas';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/audio',audioRutas)

export default app;


