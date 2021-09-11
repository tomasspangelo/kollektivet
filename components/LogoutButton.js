import React from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "next/link";
import { signOut } from "next-auth/client";

const LoginButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<ExitToAppIcon />}
      onClick={() => signOut()}
    >
      Logg ut
    </Button>
  );
};

export default LoginButton;
