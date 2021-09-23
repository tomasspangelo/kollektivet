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
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteDialog from "./DeleteDialog";
import { useState, useEffect } from "react";

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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List className={classes.root}>
        {kollektiv?.medlemmer?.map((medlem, i) => (
          <div key={i}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={medlem.image}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={medlem.name} secondary={medlem.email} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => {
                    setOpen(true);
                    setSelected(medlem);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            {i == kollektiv.medlemmer.length - 1 || (
              <Divider variant="inset" component="li" />
            )}
          </div>
        ))}
      </List>
      <DeleteDialog
        open={open}
        setOpen={setOpen}
        selected={selected}
      ></DeleteDialog>
    </>
  );
};

export default MemberList;
