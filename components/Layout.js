import React from "react";
import BottomNav from "../components/BottomNav";
import { signOut, useSession } from "next-auth/client";

const Layout = ({ children }) => {
  const [session, loading] = useSession();
  let ongoingSession = session ? true : false;
  if (loading) {
    return (
      <>
        <div id="content"></div>
        {
          <BottomNav
            style={{
              width: "100%",
              position: "fixed",
              bottom: 0,
            }}
          />
        }
      </>
    );
  }
  return (
    <>
      <div id="content">{children}</div>
      {!ongoingSession || (
        <BottomNav
          style={{
            width: "100%",
            position: "fixed",
            bottom: 0,
          }}
        />
      )}
    </>
  );
};

export default Layout;
