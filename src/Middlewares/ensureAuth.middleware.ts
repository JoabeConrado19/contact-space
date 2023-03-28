import { NextFunction, Request, Response } from "express"
import AppError from "../errors";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = (req: any, res: Response, next:NextFunction) => {    
    const authorization = req.headers.authorization;
    if (!authorization){
        throw new AppError("Missing authorization headers", 401);
    };
    
    const token = authorization.split(" ")[1];
    
    return jwt.verify(token, process.env.SECRET_KEY!, (error:any, decoded:any) => {
        if (error){
            throw new AppError("Missing authorization headers", 401);
        };

        req.user = {
            id:decoded.sub
        }
        
        return next();
    });
};

export default ensureAuthMiddleware;