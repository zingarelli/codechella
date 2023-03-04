import Footer from "components/Footer";
import Header from "components/Header";
import { ThemeContext } from "context/Theme";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

/**
 * Default template for a page
 */
export default function PageTemplate() {
    const { theme } = useContext(ThemeContext);
    
    return (
            <div className={theme}>
                <Header />
                <Outlet />
                <Footer />
            </div>
    )
}