import Avatar from "@material-ui/core/Avatar";
import { getSession, useSession } from "next-auth/client";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LogoutButton from "../components/LogoutButton";
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const Profile = ({ session }) => {
  const classes = useStyles();
  //const [session, loading] = useSession();

  return (
    <div className="flexCenter">
      <Avatar src={session?.user?.image} className={classes.large} />
      <Typography variant="h6" gutterBottom>
        {session?.user?.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {session?.user?.email}
      </Typography>
      <LogoutButton />
    </div>
  );
};

export default Profile;
