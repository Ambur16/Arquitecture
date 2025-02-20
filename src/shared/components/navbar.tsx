import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MapIcon, UsersIcon, HomeIcon } from '~/shared'

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    navigate(navItems[newValue].route);
  };

  const navItems = [
    { label: "Inicio", icon: <HomeIcon />, route: "/Inicio" },
    { label: "Characters", icon: <UsersIcon />, route: "/Characters" },
    { label: "Locations", icon: <MapIcon />, route: "/Locations" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box className="w-full">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => handleNavigation(newValue)}
          style={{
            borderBottom: "2px solid #000000",
          }}
        >
          {navItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
              component={motion.div}
            />
          ))}
        </BottomNavigation>
      </Box>
    </motion.div>
  );
};
