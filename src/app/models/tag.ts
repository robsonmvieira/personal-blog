import { Post } from './post';

export class Tag {
  public id: number;
  public title: string;
  public posts?: Post[];
}
