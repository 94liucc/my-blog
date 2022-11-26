import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
export const Blog = () => {
  const location = useLocation();
  const Container = styled.div`
    height: 100%;
    background: #f3f3f3;
  `;
  console.log("location--", location);
  return <Container>Blog</Container>;
};
