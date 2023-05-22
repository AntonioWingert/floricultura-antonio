import { NextFunction, Request, Response } from "express";

export default class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Response {

    if (error instanceof Error && error.stack) {
      return res.status(Number(error.stack)).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
}