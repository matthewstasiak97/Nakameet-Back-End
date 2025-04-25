import { Router } from "express";
import * as controllers from "../controllers/users.js";
import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.get("/", verifyToken, controllers.getUsers);

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/sign-token", controllers.signToken);
router.post("/sign-out", verifyToken, controllers.signOut);
router.post("/refresh-token", verifyToken, controllers.refreshToken);
router.get('/:userId', verifyToken, controllers.getUser);

export default router;