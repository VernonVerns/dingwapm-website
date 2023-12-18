import {createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import AboutUs from "../pages/About";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route key="homePage" index path="/" element={<HomePage />} />,
        <Route key="AboutUs" path="/about" element={<AboutUs />} />,
        <Route key="contact" path="/contact" element={<Contact />} />,
    ])
);

export default router;