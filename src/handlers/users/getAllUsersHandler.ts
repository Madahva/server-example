import getAllUsers from "../../controllers/users/getAllUsersController";
import { Request, Response } from "express";

export default async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const allUsers = await getAllUsers();

  console.log(allUsers)
    res.status(200).send(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
