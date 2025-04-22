import { Router } from "express";
import * as controllers from "../controllers/events.js";
import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.get("/", controllers.getEvents);
router.get("/:eventId", controllers.getEvent);
router.post("/", controllers.createEvent);
router.put("/:eventId", controllers.updateEvent);
router.delete("/:eventId", controllers.deleteEvent);

export default router;
