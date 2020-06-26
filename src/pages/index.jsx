// Dependencies
import React, { Fragment } from "react";
import { useHistory } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import RateReviewIcon from "@material-ui/icons/RateReview";

const useStyles = makeStyles((theme) => ({
  root: {
    WebkitBoxShadow: "0 3px 5px #333",
    MozBoxShadow: "0 3px 5px #333",
    boxShadow: "0 3px 5px #333",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: "bolder",
    color: "#41AAC2",
  },
  colorPrimary: {
    color: "#41AAC2",
  },
  Typography: {
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: "bold",
  },
}));

export default function App(props) {
  const { children } = props;
  const classes = useStyles();
  const history = useHistory();
  const onClick = (route) => {
    history.push(`${route}`);
  };
  return (
    <Fragment>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        classes={classes.root}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={() => onClick("/")}
            className={classes.colorPrimary}
          >
            <RateReviewIcon />
          </IconButton>
          <Typography color="primary" className={classes.title} variant="h6">
            TripViews
          </Typography>
          <Button
            color="default"
            onClick={() => onClick("/")}
            className={classes.Typography}
          >
            ABOUT
          </Button>
          <Button
            color="default"
            onClick={() => onClick("/reviews")}
            className={classes.Typography}
          >
            REVIEWS
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Fragment>
  );
}
