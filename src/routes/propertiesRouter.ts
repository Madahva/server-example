import { Router } from "express";

const propertiesRouter = Router();

propertiesRouter.get("/", (req, res) => {
  res.send("Properties Router");
});

export default propertiesRouter;
