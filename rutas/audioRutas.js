import express from 'express'
const audioRutas = express.Router();
import { getAudio } from './../controllers'

audioRutas.get('/',getAudio)

export default audioRutas