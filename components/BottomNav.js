import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TodayIcon from "@material-ui/icons/Today";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import { Router, useRouter } from "next/router";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    elevation: "1dp",
  },
});

export default function BottomNav() {
  let initialIndex = 0;
  const router = useRouter();
  if (router.pathname === "/kollektiv") initialIndex = 1;
  if (router.pathname === "/list") initialIndex = 2;
  if (router.pathname === "/vaskeliste") initialIndex = 3;
  if (router.pathname === "/profile") initialIndex = 4;

  const classes = useStyles();
  const [index, setIndex] = useState(initialIndex);
  useEffect(() => {
    if (index === 0) {
      router.push("/");
    } else if (index === 1) {
      router.push("/kollektiv");
    } else if (index === 2) {
      router.push("/list");
    } else if (index === 3) {
      router.push("/vaskeliste");
    } else if (index === 4) {
      router.push("/profile");
    }
  }, [index, router]);
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 4px",
      }}
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
        <BottomNavigationAction label="Vaskeliste" icon={<TodayIcon />} />
        <BottomNavigationAction label="Bruker" icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  );
}
