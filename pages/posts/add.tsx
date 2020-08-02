import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../components/layout";
import axios from "axios";
import { useRouter } from "next/router";

const Title = styled.h1`
  margin-top: 0;
`;

const Form = styled.form`
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const input = `  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;
  border: 1px solid transparent;

  &:focus {
    border:1px solid  #eab354;
  }
`;

const Input = styled.input`
  ${input};
`;

const Textarea = styled.textarea`
  ${input};
  resize: none;
  min-height: 150px;
`;

const Button = styled.button`
   {
    padding: 12px 34px;
    cursor: pointer;
    background: #eab354;
    border-color: transparent;
    color: #fff;
    border: 1px solid transparent;
    justify-self: end;

    &:hover {
      background: #eab200;
      border: ;
    }

    &:focus {
      outline: none;
      border: 1px solid #eab200;
    }
  }
`;

export default function AddPost() {
  const [post, setValue] = useState(null);
  const router = useRouter();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (post && post.body && post.title) {
      try {
        axios
          .post("https://simple-blog-api.crew.red/posts", post)
          .then((res) => {
            if (res.status === 201) {
              setValue(null);
              router.push("/");
            }
            return res;
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Layout>
      <Title>Add post</Title>

      <Form onSubmit={handleSubmit} method="post">
        <Input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Post title"
        />
        <Textarea
          name="body"
          onChange={handleChange}
          placeholder="Post content"
        />
        <Button type="submit">Add</Button>
      </Form>
    </Layout>
  );
}
