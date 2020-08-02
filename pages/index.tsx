import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import { NextPageContext } from "next";
import { IPost } from "../interfaces";
import { Loader } from "../components/loader";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";

const Title = styled.h1`
  margin-top: 0;
`;

const PostTitle = styled.div`
  background: #eab354;
  opacity: 0.6;
  border-radius: 4px;
  padding: 15px;
  margin-top: 25px;
  cursor: pointer;
  max-width: 600px;

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  posts: IPost[];
}

export default function PostsPage({ posts }: Props) {
  if (!posts) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  console.log(posts);

  return (
    <Layout>
      <Title>Posts</Title>
      {posts.reverse().map((post) => (
        <Link href={"/posts/[id]"} as={`/posts/${post.id}`} key={post.id}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
      ))}
    </Layout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  try {
    const posts: IPost[] = await axios
      .get("https://simple-blog-api.crew.red/posts")
      .then((res) => res.data)
      .catch((e) => e);

    return {
      props: { posts },
    };
  } catch (error) {
    return {
      props: {
        posts: null,
      },
    };
  }
}
