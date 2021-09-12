import { Button, Typography } from "@material-ui/core";
import { useItems } from "../components/util/hooks";
import ShoppingList from "../components/ShoppingList";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const List = () => {
  const { items } = useItems();
  const numUnfinished = items?.filter((item) => item.bought).length;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Handleliste
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {`${numUnfinished}/${items?.length} gjenstander kjøpt inn.`}
      </Typography>
      <ShoppingList items={items}></ShoppingList>
      <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
        Legg til
      </Button>
    </>
  );
};

export default List;
