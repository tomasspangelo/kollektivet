import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
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

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Hjem"
        icon={<HomeIcon />}
        onClick={() => {
          router.push("/");
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
