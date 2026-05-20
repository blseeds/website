import Navbar from "../navbar/Navbar";
import TopBar from "./TopBar";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ width: '100%', zIndex: 1100, position: 'relative' }}>
      <TopBar />
      <Navbar />
    </Box>
  );
}
