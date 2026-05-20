import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { Analytics } from "@vercel/analytics/next"

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Determine the page key based on the pathname
    let pageKey = "home";
    const path = location.pathname.split("/")[1];
    
    if (path) {
      pageKey = path;
    }

    // Apply the data-page attribute to the body or a wrapper element
    document.body.setAttribute("data-page", pageKey);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <Analytics/>
    </Box>
  );
}
