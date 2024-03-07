import { Request, Response } from "express";
import bulkCreateProperties from "../../controllers/properties/bulkCreatePropertiesController";

export default async function bulkCreatePropertiesHandler(req: Request, res: Response) {
  const propertiesData: any[]= req.body;
  try {

    const properties = await bulkCreateProperties(propertiesData);
    res.status(202).send(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
