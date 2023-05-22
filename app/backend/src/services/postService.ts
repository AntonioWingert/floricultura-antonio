import NotFound from "../errors/NotFound";
import Post from "../database/models/Posts";

export default class PostService {
  public static async getAll(): Promise<Post[]> {
    const posts = await Post.findAll();

    return posts;
  }

  public static async getById(id: number): Promise<Post | null> {
    const post = await Post.findByPk(id);

    return post;
  }

  public static async create(post: Post): Promise<Post> {
    const newPost = await Post.create(post);

    return newPost;
  }

  public static async update(id:number, post: Post): Promise<Post> {

    const validPost = await Post.findByPk(id);

    if (!validPost) {
      throw new NotFound('Post not found');
    }

    await Post.update(
      { title: post.title, 
        content: post.content, 
        photo: post.photo,
        updatedAt: new Date()
      },
      { where: { id } }
    )

    const updatedPost = await Post.findByPk(id);

    if (!updatedPost) {
      throw new NotFound('Post not found');
    }

    return updatedPost;
  }

  public static async delete(id: number): Promise<void> {
    await Post.destroy({ where: { id } });
  }
}