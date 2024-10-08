// import dotenv from 'dotenv';
// dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import { sample_foods } from './data';
// import foodRouter from './routers/food.router';
// import userRouter from './routers/user.router';
// import orderRouter from './routers/order.router';
// import { dbConnect } from './configs/database.config';
// dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods",(req,res) =>{
    res.send(sample_foods);
})

const port = 5000;
app.listen(port, () => {
    console.log("website served om http://localhost:"+port);
})

/*app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})*/