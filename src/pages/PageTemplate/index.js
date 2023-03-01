import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

/**
 * Default template for a page
 */
export default function PageTemplate() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}