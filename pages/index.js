import LoginButton from "../components/LoginButton";
import { useSession } from "next-auth/client";
import { CircularProgress } from "@material-ui/core";

export default function Home() {
  const [session, loading] = useSession();
  let ongoingSession = session ? true : false;
  let content;
  if (!ongoingSession) {
    content = (
      <div className="homeContainer">
        <LoginButton />
      </div>
    );
  } else if (loading) {
    content = <CircularProgress></CircularProgress>;
  } else {
    content = <p>Velkommen, {session?.user.name}!</p>;
  }
  return <div className="flexCenter stretch">{content}</div>;
}
