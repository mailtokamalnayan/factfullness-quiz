import React from "react";
import { render } from "react-dom";
import Quiz from "../../lib/Quiz";
import { quiz } from "./quiz";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  grid-column-gap: 4rem;
  padding: 1rem;
  max-width: 1024px;
  margin: 4rem auto;
`;

const Content = styled.div`
  ul {
    padding-left: 0;
    li {
      margin-bottom: 1rem;
      color: rgb(92, 97, 102);
    }
  }
`;

function App() {
  return (
    <Container>
      <Content>
        <h1>Factfulness is...</h1>
        <ul>
          <li>
            the stress-reducing habit of only carrying opinions for which you
            have strong supporting facts.
          </li>
          <li>
            recognizing when we get negative news, and remembering that
            information about bad events is much more likely to reach us.
          </li>
          <li>
            recognizing that many things - people, countries, religions, and
            cultures - appear to be constant just because the change is
            happening slowly.
          </li>
          <li>
            remembering that even small, slow changes gradually add up to big
            changes.
          </li>
          <li>
            recognizing when a scapegoat is being used and remembering that
            blaming an individual often steals the focus from other possible
            explanations and blocks our ability to prevent similar problems in
            the future.
          </li>
          <li>
            recognizing when a decision feels urgent and remembering that it
            rarely is.
          </li>
        </ul>
      </Content>
      <Quiz quiz={quiz} shuffle={true} />
    </Container>
  );
}

render(<App />, document.getElementById("app"));
