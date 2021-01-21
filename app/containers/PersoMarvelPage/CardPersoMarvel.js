import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    margin: '10px'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {perso} = props
  console.log('MediaCard', perso)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={perso.thumbnail.path + "." + perso.thumbnail.extension}
          title={perso.name}
          subheader={perso.modified}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {perso.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {perso.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}