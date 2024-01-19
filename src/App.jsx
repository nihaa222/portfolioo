import "./App.css";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import Projects from "./Sections/Projects";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #f9f1e5;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

function App() {
  return (
    <Container>
      <Home />
      <About />
      <Projects />
      <Contacts />
    </Container>
  );
}

export default App;
