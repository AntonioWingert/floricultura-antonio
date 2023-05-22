import { Router } from "express";
import PostController from "../controllers/postController";
import TokenValidate from "../middlewares/TokenValidate";

const router = Router();

router.get("/",
  TokenValidate.validate,
  PostController.getAll);

router.get("/:id",
  TokenValidate.validate,
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