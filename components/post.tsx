import React from "react";
import { IPost, IComment } from "../interfaces";
import styled from "styled-components";

const MyPost = styled.div`
  background: #eab354;
  border-radius: 4px;
  padding: 15px;
  min-height: 250px;

  p {
    color: #4a4a4a;
    line-height: 1.5;
  }
`;

const PostTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Post: React.FC<IPost> = ({ post }) => {
  return (
    <MyPost>
      <PostTitle>{post.title}</PostTitle>
      <p>{post.body}</p>
    </MyPost>
  );
};

const Commnet = styled.div`
  background: #eab354;
  opacity: 0.6;
  padding: 10px;
  max-width: 400px;
  margin-top: 15px;
`;

export const Comment: React.FC<IComment> = ({ body }) => {
  return (
    <Commnet>
      <p>{body}</p>
    </Commnet>
  );
};
