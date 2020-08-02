export interface IComment {
  id: number;
  postId: number;
  body: string;
}

export interface IPost {
  post: { id: number; title: string; body: string; comments?: IComment[] };
}
