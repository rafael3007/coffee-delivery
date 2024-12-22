import { jsx as _jsx } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
// Pages
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
export default function Router() {
    return (_jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(DefaultLayout, {}), children: _jsx(Route, { path: "/", element: _jsx(Home, {}) }) }) }));
}
;
