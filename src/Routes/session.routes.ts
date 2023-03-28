import { Router } from "express";
import { createSessionController } from "../Controllers/session.controllers";
import ensureIsValidDataMiddleware from "../Middlewares/ensureIsValidData.middleware";
import { requestLoginSerializer } from "../Serializers/session.serializers";

const sessionRoutes = Router();

sessionRoutes.post("/", ensureIsValidDataMiddleware(requestLoginSerializer), createSessionController);

export default sessionRoutes;