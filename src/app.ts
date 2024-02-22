import express from "express";
import morgan from "morgan";
import routes from './routes/index.ts'

import { Request, Response, NextFunction } from "express";

const server = express();

// Middlewares
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH",
  );
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  const message = err.message || "Internal Server Error";
  console.error(err);
  res.status(status).send(message);
});

export default server;
