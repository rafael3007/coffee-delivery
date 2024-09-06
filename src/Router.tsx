import { Routes, Route } from "react-router-dom"

// Pages
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Home } from "./pages/Home"


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

        </Routes>
    )
};