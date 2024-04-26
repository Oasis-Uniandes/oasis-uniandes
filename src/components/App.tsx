import { Home, AboutUs } from "@views/index";
import { NavBar, Footer } from "@layout/index";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
        <Footer />
        </>

    );
}

export default App;