import React from "react";
import Content from "./components/Content";
import styled, { ThemeProvider } from "styled-components";
import { UserDarkMode } from "./styles/UserDarkMode";
import Toggle from "./components/Toggle";
import { GlobalStyle, lightTheme, darkTheme } from "./styles/GlobalStyle";

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [theme, toggleTheme] = UserDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  console.log(theme);
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
