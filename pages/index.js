import LoginButton from "../components/LoginButton";
import Layout from "../components/Layout";
import { signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { useAtom } from "jotai";
import { navigationAtom } from "../lib/atom";
import prisma from "../lib/prisma";

export default function Home() {
  console.log(prisma);
  const [session, loading] = useSession();
  const [value, setValue] = useAtom(navigationAtom);
  let ongoingSession = session ? true : false;
  let content;
  if (!ongoingSession && !loading) {
    content = (
      <div className="homeContainer">
        <LoginButton />
      </div>
    );
  } else {
    content = <p>Velkommen, {session?.user.name}!</p>;
  }
  return content;
}
