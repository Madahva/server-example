import { Request, Response } from "express";
import getAllProperties from "../../controllers/properties/getAllPropertiesController";

export default async function getAllPropertiesHandler(req: Request, res:Response) {

  try {
    const properties = await getAllProperties();

    res.status(200).send(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

