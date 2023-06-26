import { Router } from "express";
import PostController from "../controllers/postController";
import TokenValidate from "../middlewares/TokenValidate";

const router = Router();

router.get("/",
  PostController.getAll);

router.get("/:id",
  PostController.getById);

router.post("/",
  TokenValidate.validate,
  PostController.create);

router.put("/:id",
  TokenValidate.validate,
  PostController.update);

router.delete("/:id",
  TokenValidate.validate,
  PostController.delete);

export default router;