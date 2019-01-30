import React from "react";
import { render } from "react-dom";
import Quiz from "../../lib/Quiz";
import { quiz } from "./quiz";
import styled from "styled-components";
import { FiGlobe, FiGithub, FiTwitter } from "react-icons/fi";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

const Header = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.footer`
  padding: 1rem 2rem 2rem 1rem;
  text-align: center;
  font-size: 0.8rem;
  a {
    color: #b92b27;
    :hover {
      text-decoration: none;
    }
  }
`;

const TwitterLink = styled.a`
  background-image: linear-gradient(rgb(6, 132, 248), rgb(6, 122, 228));
  color: white;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-shadow: rgba(0, 0, 0, 0.08) 0px 1px 1px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;

function App() {
  return (
    <div>
      <Header>
        <FiGlobe size="36" color="#b92b27" />
        <TwitterLink
          target="_blank"
          href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fmailtokamalnayan.github.io%2Ffactfullness-quiz%2F&text=Factfulness%20Quiz:%20https%3A%2F%2Fmailtokamalnayan.github.io%2Ffactfullness-quiz%2F&via=kns008"
        >
          <FiTwitter color="white" />
          Share
        </TwitterLink>
      </Header>
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
      <Footer>
        <a
          href="https://github.com/mailtokamalnayan/factfullness-quiz"
          target="_blank"
          title="Project hosted on Github"
        >
          <FiGithub size="24" color="#b92b27" />
        </a>{" "}
        <br />
        <div style={{ opacity: 0.5 }}>
          Open Source by{" "}
          <a
            href="https://twitter.com/kns008/"
            title="Kamal Nayan on Twitter"
            target="_blank"
          >
            @kns008
          </a>
        </div>
      </Footer>
    </div>
  );
}

render(<App />, document.getElementById("app"));
