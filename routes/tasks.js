import express from "express";
import { newtask, mytask, updatetask, deletetask } from "../controllers/tasks.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express();

router.post("/new",isAuthenticated, newtask);
router.post("/myTasks",isAuthenticated, mytask);
router.route("/:id").put(isAuthenticated, updatetask).delete(isAuthenticated, deletetask);

export default router;