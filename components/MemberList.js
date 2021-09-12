import { useMembers } from "./util/hooks";
import { kollektivAtom } from "../lib/atom";
import { useAtom } from "jotai";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MemberList = (props) => {
  const classes = useStyles();
  const { kollektiv } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {kollektiv?.navn}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {kollektiv?.adresse}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {kollektiv?.postnummer + ", " + kollektiv?.poststed}
      </Typography>

      <List className={classes.root}>
        {kollektiv?.medlemmer?.map((medlem, i) => (
          <div key={i}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={medlem.image}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={medlem.name} secondary={medlem.email} />
            </ListItem>
            {i == kollektiv.medlemmer.length - 1 || (
              <Divider variant="inset" component="li" />
            )}
          </div>
        ))}
      </List>
    </>
  );
};

export default MemberList;
