/**
 * @fileoverview Authentication stuffs
 */

import { Hono } from "hono";
import { authController } from "../controllers/auth.controller";

const signUpRoute = new Hono();

signUpRoute.post("/test", ...authController);

export default signUpRoute;
