import { Request, Response } from "express";
import Post from "../database/models/Posts";
import PostService from "../services/postService";

export default class PostController {
  constructor(
    private postService: PostService = new PostService()
  ) { }

  public static async getAll(req: Request, res: Response):
  Promise<Response<Post[]>> {
    const posts = await PostService.getAll();

    return res.status(200).json(posts);
  }

  public static async getById(req: Request, res: Response):
  Promise<Response<Post | null>> {
    const { id } = req.params;

    const post = await PostService.getById(Number(id));

    return res.status(200).json(post);
  }

  public static async create(req: Request, res: Response):
  Promise<Response<Post>> {
    const post = req.body;

    const newPost = await PostService.create(post);

    return res.status(201).json(newPost);
  }

  public static async update(req: Request, res: Response):
  Promise<Response<Post>> {
    const post = req.body;
    const { id } = req.params;

    const updatedPost = await PostService.update(+id, post);

    return res.status(200).json(updatedPost);
  }

  public static async delete(req: Request, res: Response):
  Promise<Response<void>> {
    const { id } = req.params;

    await PostService.delete(Number(id));

    return res.status(204).json();
  }
}