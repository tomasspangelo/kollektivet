import React from "react";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "next/link";
import { signIn } from "next-auth/client";
const LoginButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GitHubIcon />}
      onClick={() => signIn()}
    >
      Logg inn med GitHub for tilgang
    </Button>
  );
};

export default LoginButton;
