import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';
import { CartContextProvider } from './contexts/CartProvider';
export function App() {
    return (_jsxs(ThemeProvider, { theme: defaultTheme, children: [_jsx(GlobalStyle, {}), _jsxs(CartContextProvider, { children: [_jsx(Header, {}), _jsx(Outlet, {})] })] }));
}
