import { Router } from "express";
import eventsRouter from "./events.js";
import usersRouter from "./users.js"
import * as controllers from "../controllers/events.js";
const router = Router();

router.get("/", controllers.getEvents);
router.use("/auth", usersRouter)
router.use("/events", eventsRouter);
router.use("/users", usersRouter);

export default router;
