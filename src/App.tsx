
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';


export default function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  )
}

