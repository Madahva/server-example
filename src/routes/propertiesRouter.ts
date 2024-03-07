import { Router } from "express";
import getAllPropertiesHandler from "../handlers/properties/getAllPropertiesHandler";
import createPropertyHandler from "../handlers/properties/createPropertyHandler";
import bulkCreatePropertiesHandler from "../handlers/properties/bulkCreatePropertiesHandler";

const propertiesRouter = Router();

propertiesRouter.get("/", getAllPropertiesHandler);
propertiesRouter.post("/", createPropertyHandler);
propertiesRouter.post("/bulk", bulkCreatePropertiesHandler);

export default propertiesRouter;
