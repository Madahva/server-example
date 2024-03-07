import { Request, Response } from "express";
import createProperty from "../../controllers/properties/createPropertyController";

export default async function createPropertyHandler(req: Request, res:Response) {
  const propertyData = req.body;

  try {
    const createdProperty = await createProperty(propertyData);

    res.status(200).send(createdProperty);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

