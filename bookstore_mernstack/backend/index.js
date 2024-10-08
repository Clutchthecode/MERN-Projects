import express from 'express';
import { PORT ,mongodbURl} from './config.js';
import mongoose from'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';
const app= express();
//using middleware to parsing request body
app.use(express.json());
//middlewaren for handling cors policy
//option 1; allow all origin with default of cors(*)
app.use(cors());
//option 2: allow custom origins
// app.use(
//     cors({
//         origin:'http://localhost:3000/',
//         methods: ['GET','PUT','POST','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )
app.get('/',(req,res)=>{
    console.log(req);
    const result=res.status(234).send('hello guys');
    console.log(result);
})
app.use('/books',booksRoute);




mongoose.connect(mongodbURl).then(()=>{
    console.log('app connected to database'); 
    app.listen(PORT,()=> console.log(`app is listening on port:${PORT}`));
})
.catch((error)=>{
    console.log(error);
})