import { Request, Response } from "express";

export function createApp() {
  const express = require("express");
  const app = express();

  // Middleware
  app.use(express.json());
  app.get("/", (_req: Request, res: Response) => {
    res.json({
      name: "social-commerce-api",
      status: "ok",
    });
  });

  app.get("/health", (_req: Request, res: Response) => {
    res.json({
      status: "ok",
      service: "api",
    });
  });

  return app;
}
