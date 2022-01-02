import { Router } from "express";
import { verifyToken } from "../middlewares/token.middlewares";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";

const router: Router = Router();

router.use("/api", authRoutes, verifyToken, userRoutes);

export default router;
