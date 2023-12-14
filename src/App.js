import './App.css';
import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from './utils/theme';

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/index"
import Experience from "./components/Experience/index"
import Skills from './components/skills/Skills';
import Education from './components/Education';
import {BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Projects/Index';



const Body = styled.div`
background-color:${({ theme }) => theme.bg};
width:100%;
overflow-x :hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  `



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
      
        <Hero />
        <Wrapper>
          <Skills />
          <Experience/>
          <Projects/>
          <Education/>
        </Wrapper>

      </Body>
      </Router>
    </ThemeProvider>

  );
}

export default App;
