import createUser from "../../controllers/users/createUserController";
import { Request, Response } from "express";

export default async function createUserHandler(req: Request, res: Response) {
  const userData = req.body;

  try {
    const user = await createUser(userData);
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
