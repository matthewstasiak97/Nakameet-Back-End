import { Router } from "express";
import eventsRouter from "./events.js";
import usersRouter from "./users.js";


const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});
router.use("/auth", usersRouter)
router.use("/events", eventsRouter);

export default router;
