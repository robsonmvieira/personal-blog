import { Tag } from './tag';
export class Post {
  public id: number;
  public category_id: number;
  public title: string;
  public subtitle: string;
  public content: string;
  public tags?: Tag[];
}
