// Action
import type { RequestHandler } from "express";

// Function sayWelcome
const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

export default { sayWelcome };
