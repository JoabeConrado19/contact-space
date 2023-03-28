import express from "express";
import "express-async-errors";
import "reflect-metadata";

import { handleError } from "./errors";
import contactRoutes from "./Routes/contact.routes";
import sessionRoutes from "./Routes/session.routes";
import userRoutes from "./Routes/user.routes";


const app = express();
app.use(express.json());
app.use('/login', sessionRoutes)
app.use('/users', userRoutes)
app.use('/users/contacts', contactRoutes)
app.use(handleError);

export default app;