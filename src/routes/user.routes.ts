import { Router } from "express";
import Controller from "../controllers/user.controllers";
import Middleware from "../middlewares/user.middlewares";

const router: Router = Router();

router.get("/user", Middleware.getUser, Controller.getUser);
router.put("/user", Middleware.updateUser, Controller.updateUser);
router.delete("/user", Middleware.deleteUser, Controller.deleteUser);

export default router;