import { Post } from './post';
import { User } from './user';

export class Comment {
  public id: number;
  public post: Post;
  public content: string;
  public user_id: User;
}
