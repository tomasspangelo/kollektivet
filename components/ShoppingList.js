import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import StoreIcon from "@material-ui/icons/Store";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import React, { useEffect } from "react";
import BuyItemDialog from "./BuyItemDialog";

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
const ShoppingList = (props) => {
  const { items } = props;
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const classes = useStyles();
  useEffect(() => {
    const newSelectedItems = items ? items.filter((item) => item.bought) : [];
    setSelectedItems(newSelectedItems);
  }, [items]);
  const handleToggle = (item, i) => {
    const currentIndex = selectedItems?.indexOf(item);
    const newSelectedItems = selectedItems ? [...selectedItems] : [];
    if (currentIndex == -1) newSelectedItems.push(item);
    else newSelectedItems.splice(currentIndex, 1);
    setSelectedItems(newSelectedItems);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e, item) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setOpen(false);
    const currentIndex = selectedItems?.indexOf(selectedItem);
    if (currentIndex != -1 && !selectedItem.bought) {
      const newSelectedItems = selectedItems ? [...selectedItems] : [];
      newSelectedItems.splice(currentIndex, 1);
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <>
      <List component="nav" className={classes.root}>
        {items?.map((item, i) => (
          <div key={i}>
            <ListItem button onClick={(e) => handleClickOpen(e, item)}>
              <ListItemAvatar>
                <Avatar>
                  <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                id={`checkbox-list-secondary-label-${i}`}
                primary={item.title}
                secondary={item.createdBy.name}
              />

              <ListItemSecondaryAction>
                <Checkbox
                  color="primary"
                  edge="end"
                  inputProps={{
                    "aria-labelledby": `checkbox-list-secondary-label-${i}`,
                  }}
                  onChange={(e) => {
                    handleToggle(item, i);
                    handleClickOpen(e, item);
                  }}
                  checked={selectedItems.indexOf(item) !== -1}
                  disabled={true}
                />
              </ListItemSecondaryAction>
            </ListItem>
            {i == items.length - 1 || (
              <Divider variant="inset" component="li" />
            )}
          </div>
        ))}
      </List>
      <BuyItemDialog
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      ></BuyItemDialog>
    </>
  );
};

export default ShoppingList;
