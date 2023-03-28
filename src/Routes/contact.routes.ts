import { Router } from "express";
import { createContactController, deleteContactController, updateContactController } from "../Controllers/contact.controllers";
import ensureAuthMiddleware from "../Middlewares/ensureAuth.middleware";
import ensureIsValidDataMiddleware from "../Middlewares/ensureIsValidData.middleware";
import { requestContactSerializer } from "../Serializers/contact.serializers";

const contactRoutes = Router();

contactRoutes.post("/", ensureAuthMiddleware, ensureIsValidDataMiddleware(requestContactSerializer) ,createContactController);
contactRoutes.delete("/:id", ensureAuthMiddleware ,deleteContactController);
contactRoutes.patch("/:id", ensureAuthMiddleware , updateContactController);



export default contactRoutes;