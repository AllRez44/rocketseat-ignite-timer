import { ThemeProvider } from 'styled-components';
import './App.css';
import { Button } from './components/Button';
import defaultTheme from './styles/themes/default';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1 className="title">
        Hello World
      </h1>
      <Button />
      <Button />
      <Button />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
