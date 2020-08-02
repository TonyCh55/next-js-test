import { Layout } from "../../components/layout";
import { Post, Comment } from "../../components/post";
import { NextPageContext } from "next";
import axios from "axios";
import { IPost } from "../../interfaces";
import { Loader } from "../../components/loader";

export default function PostPage({ post }: IPost) {
  if (!post) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  const { comments } = post;

  return (
    <Layout>
      <Post post={post} />
      {comments && comments.length
        ? comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                body={comment.body}
                postId={comment.postId}
                id={comment.id}
              />
            );
          })
        : "No comments"}
    </Layout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  try {
    const post: IPost = await axios
      .get(
        `https://simple-blog-api.crew.red/posts/${ctx.query.id}?_embed=comments`
      )
      .then((res) => res.data)
      .catch((e) => e);

    return {
      props: { post },
    };
  } catch (error) {
    return {
      props: {
        post: null,
      },
    };
  }
}
