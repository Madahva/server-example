import { Router } from "express";
import propertiesRouter from "./propertiesRouter";
import usersRouter from "./usersRouter";

const router = Router();
router.use("/properties", propertiesRouter);
router.use("/users", usersRouter);

export default router;
