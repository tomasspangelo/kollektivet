import { useState, useEffect } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import { useRouter } from "next/router";
import HomeIcon from "@material-ui/icons/Home";
import { Paper } from "@material-ui/core";

export default function BottomNav() {
  let initialIndex = 0;
  const router = useRouter();
  if (router.pathname === "/kollektiv") initialIndex = 1;
  if (router.pathname === "/list") initialIndex = 2;
  if (router.pathname === "/profile") initialIndex = 3;

  const [index, setIndex] = useState(initialIndex);
  console.log(router.pathname);
  useEffect(() => {
    if (index === 0) {
      router.push("/");
    } else if (index === 1) {
      router.push("/kollektiv");
    } else if (index === 2) {
      router.push("/list");
    } else if (index === 3) {
      router.push("/profile");
    }
  }, [index]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={index}
        showLabels
        onChange={(e, newIndex) => setIndex(newIndex)}
      >
        <BottomNavigationAction label="Hjem" icon={<HomeIcon />} />
        <BottomNavigationAction label="Kollektiv" icon={<GroupIcon />} />
        <BottomNavigationAction
          label="Handleliste"
          icon={<ShoppingCartIcon />}
        />

        <BottomNavigationAction label="Bruker" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
