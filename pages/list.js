import { Button, Checkbox, Typography } from "@material-ui/core";
import { useItems } from "../components/util/hooks";
import ShoppingList from "../components/ShoppingList";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useState } from "react";
import AddItemDialog from "../components/AddItemDialog";

const List = () => {
  const { items } = useItems();
  const [open, setOpen] = useState(false);
  const numUnfinished = items?.filter((item) => item.bought).length;
  return (
    <>
      <div className="flexCenter">
        <Typography variant="h6" gutterBottom>
          Handleliste
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {`${numUnfinished}/${items?.length} gjenstander kjøpt inn.`}
        </Typography>
      </div>
      <div className="overflowBox">
        <ShoppingList items={items}></ShoppingList>
      </div>
      <div className="flexCenter" style={{ marginTop: "16px" }}>
        <Button
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => setOpen(true)}
        >
          Legg til
        </Button>
      </div>
      <AddItemDialog open={open} setOpen={setOpen}></AddItemDialog>
    </>
  );
};

export default List;
