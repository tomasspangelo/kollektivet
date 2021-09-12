import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import { navigationAtom } from "../lib/atom";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNav() {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = useAtom(navigationAtom);
  const [index, setIndex] = React.useState(0);
  console.log(router.pathname);
  if (router.pathname === "/" && index != 0) setIndex(0);
  if (router.pathname === "/kollektiv" && index != 1) setIndex(1);
  if (router.pathname === "/list" && index != 2) setIndex(2);
  if (router.pathname === "/profile" && index != 3) setIndex(3);

  return (
    <BottomNavigation value={index} showLabels className={classes.root}>
      <BottomNavigationAction
        label="Hjem"
        icon={<HomeIcon />}
        onClick={() => {
          router.push("/");
        }}
      />
      <BottomNavigationAction
        label="Kollektiv"
        icon={<GroupIcon />}
        onClick={() => {
          router.push("/kollektiv");
        }}
      />
      <BottomNavigationAction
        label="Handleliste"
        icon={<ShoppingCartIcon />}
        onClick={() => {
          router.push("/list");
        }}
      />

      <BottomNavigationAction
        label="Bruker"
        icon={<PersonIcon />}
        onClick={() => {
          router.push("/profile");
        }}
      />
    </BottomNavigation>
  );
}
