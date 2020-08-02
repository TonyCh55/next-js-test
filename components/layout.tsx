import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Nav = styled.div`
  width: 320px;
  background: #5f787b;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 100vh;
  flex-shrink: 0;

  a {
    color: #fff;
    padding: 14px 15px;
    width: 100%;
    text-transform: uppercase;
  }

  a:hover {
    background: #eab354;
  }
`;

const Main = styled.div`
  padding: 30px;
  background: #e7e4e2;
  height: 100vh;
  flex-grow: 1;
  overflow-y: scroll;
`;

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC = ({ children }: Props) => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <a>Posts</a>
        </Link>
        <Link href="/posts/add">
          <a>Add post</a>
        </Link>
      </Nav>
      <Main>{children}</Main>
    </Wrapper>
  );
};
