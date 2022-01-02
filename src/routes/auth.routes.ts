import { Router } from "express";
import Controller from "../controllers/auth.controllers";
import Middleware from "../middlewares/auth.middlewares";

const router: Router = Router();

router.post("/sign-in", Middleware.signIn, Controller.signIn);
router.post("/sign-up", Middleware.signUp, Controller.signUp);

export default router;