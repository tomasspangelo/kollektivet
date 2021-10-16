import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  ExpandMore,
} from "@material-ui/core";
import {
  MoreVert,
  FavoriteIcon,
  ShareIcon,
  ExpandMoreIcon,
} from "@material-ui/icons";

const UserJobCard = ({ userJob, yearNow, weekNow }) => {
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar src={userJob.user.image}>R</Avatar>}
        action={
          <IconButton aria-label="settings" disabled={true}>
            <MoreVert />
          </IconButton>
        }
        title={userJob.user.name}
        subheader={`Uke ${weekNow}, ${yearNow}`}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom component="div">
          {userJob.job.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Oppgaven er{" "}
          {userJob.finished == true ? "fullført." : "ikke fullført."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};
export default UserJobCard;
