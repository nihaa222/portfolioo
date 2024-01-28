import "./App.css";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import Projects from "./Sections/Projects";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  background-color: #d6cbbc;
  /* background-color: #f2e4e6; */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
`;

const Loader = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  height: 100vh;
  width: 100vw;
  position: fixed;
  border-color: red;
  background-color: #f2e4e6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Loady = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  border: 3px solid violet;
  border-top: 8px solid violet;
  top: 1.3rem;
  left: 1.3rem;
  border-radius: 50%;
`;

const Load = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: black;
  border: 3px solid #15f4ee;
  border-top: 8px solid #15f4ee;
  border-radius: 50%;
  animation: loading 1s infinite; /* Added animation property */

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  // const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Simulating a delay (you can replace this with your actual data fetching logic)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <BrowserRouter>
      <>
        {loading ? (
          <Loader>
            <Load>
              <Loady></Loady>
            </Load>
          </Loader>
        ) : null}
        <Container>
          <Home />
          <About />
          <Projects />
          <Contacts />
        </Container>
      </>
    </BrowserRouter>
  );
}

export default App;
