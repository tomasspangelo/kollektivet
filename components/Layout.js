import React from "react";
import BottomNav from "../components/BottomNav";
import { signOut, useSession } from "next-auth/client";

const Layout = ({ children }) => {
  const [session, loading] = useSession();
  let ongoingSession = session ? true : false;
  if (loading) {
    return (
      <div id="layout">
        <div id="content">{children}</div>
        {<BottomNav />}
      </div>
    );
  }
  return (
    <div id="layout">
      <div id="content">{children}</div>
      {!ongoingSession || <BottomNav />}
    </div>
  );
};

export default Layout;
