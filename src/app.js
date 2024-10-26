import express from "express";
import { ApiError } from "./utils/ApiError";
import cookieParser from "cookie-parser";
import cores from "cores";

const app = express();

app.use(cores({
    origin: process.env.CORS_ORIGIN, 
    credentials: true,
}));

app.use(express.json({ limit: '18kb' }));
app.use(express.urlencoded({ limit: '18kb', extended: true }));
app.use(cookieParser());
app.use(express.static('public'));




app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});


app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json(err.toJson());
    }
    console.error(err.stack);
    return res.status(500).json({ message: 'Internal Server Error' });
});



export { app };