import express from "express";
import authRoutes from "./routes/auth.routes.js";
import todoRoutes from "./routes/todo.routes.js";

export const app =  express();

app.use(express.json());

app.use('/api/auth',authRoutes);

app.use('/api/todos',todoRoutes);