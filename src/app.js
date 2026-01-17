import express from "express";
import authRoutes from "./routes/auth.routes.js";
import todoRoutes from "./routes/todo.routes.js";
import cors from "cors";

export const app =  express();

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
)

app.use(express.json());

app.use('/api/auth',authRoutes);

app.use('/api/todos',todoRoutes);