import express from 'express';
import cors from 'cors';

import router from './router';
import {protect} from "./modules/auth";
import {createNewUser, signin} from "./handlers/user";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1', protect, router); //monada, jest pipe, przez ktory przsechodzą funkcję i mogą zostać przerzucone

app.post('/users', createNewUser);
app.post('/signin', signin)

app.get("/", (req, res) => {
    res.json({message: "Hello Express"});
})


export default app ;