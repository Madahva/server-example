import { Router } from "express";
import getAllUsersHandler from "../handlers/users/getAllUsersHandler";
import createUserHandler from "../handlers/users/createUserHandler";

const usersRouter = Router();

usersRouter.get("/", getAllUsersHandler);
usersRouter.post("/", createUserHandler);

export default usersRouter;
