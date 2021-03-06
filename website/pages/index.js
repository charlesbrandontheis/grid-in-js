import React from "react";
import styled from "styled-components";
import Demo from "../components/Demo";
import Editor from "../components/Editor";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  height: 100%;

  /* Bug fix for IE 11 aside, not related to grid-in-js */
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  margin-right: 3.5rem;
  overflow-y: scroll;

  @media (min-width: 640px) {
    margin-right: 0;
  }
`;

export default class extends React.Component {
  render() {
    return (
      <Container>
        <Main>
          <Header />
          <Demo />
        </Main>
        <Editor />
      </Container>
    );
  }
}
