import express, { Router } from "express";

const app = express();

const router = Router();
router.get("/demo", (req, res) => res.status(200).json({ message: "Template repository successfull"}));

app.use("/api/", router);

export default app; 