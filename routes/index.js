import { Router } from "express";
import eventsRouter from "./events.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});
router.use("/events", eventsRouter);

export default router;
