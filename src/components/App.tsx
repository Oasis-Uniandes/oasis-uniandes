import { Home, AboutUs } from "@views/index";
import { NavBar, Footer } from "@layout/index";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@utils/ScrollToTop";

const App = () => {
    return (
        <>
        <NavBar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
        <Footer />
        </>

    );
}

export default App;