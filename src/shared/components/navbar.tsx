import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    const routes = ["/home", "/products", "/calendar", "/place"];
    navigate(routes[newValue]);
  };

  return (
    <Box className=" w-full shadow-md bg-white">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => handleNavigation(newValue)}
        sx={{
          background: "white",
          boxShadow: 3,
        }}
      >
        <BottomNavigationAction label="Principal"/>
        <BottomNavigationAction label="Products"/>
        <BottomNavigationAction label="Calendar"/>
        <BottomNavigationAction label="Place"/>
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
