import { Router } from "express";
import { createUser, loginUser } from "../Controllers/UserController";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);

export default userRouter;
