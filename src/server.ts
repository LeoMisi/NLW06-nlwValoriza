import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors"

import { router } from "./routes";

import "./database";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  (Erro: Error, request: Request, response: Response, next: NextFunction) => {
    if (Erro instanceof Error) {
      return response.status(400).json({
        error: Erro.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server Error",
    });
  }
);

app.listen(3000, () => console.log("Server is Running"));
