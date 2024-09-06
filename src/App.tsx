import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/themes/global';
import Router from './Router';


export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Outlet />
    </ThemeProvider>
  )
}

