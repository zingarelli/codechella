// copied from: https://v5.reactrouter.com/web/guides/scroll-restoration
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* 
  Scroll to the top of the browser's window. This will be used everytime 
  the user navigates to a new page to ensure that the user will view the 
  top of the page when the page is rendered.
*/
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}