// Dependencies
import React, { Fragment } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CardTravelIcon from "@material-ui/icons/CardTravel";

// Assets
import "./home.scss";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#41AAC2",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const history = useHistory();
  const onClick = () => {
    history.push("/reviews");
  };
  return (
    <Fragment>
      <h1 className="home--title">The meeting point of every tourist</h1>
      <p className="home--paragraph">
        If you are looking for your next trip destination, this is the best
        place to view the reviews of all our customers about their experince on
        our destination trips recomendations. Contact us to live the experience
        and share your own reviews
      </p>
      <div className="home--btn">
        <Button
          size="large"
          elevation={2}
          color="primary"
          onClick={onClick}
          variant="contained"
          className={classes.btn}
          startIcon={<CardTravelIcon />}
        >
          Reviews
        </Button>
      </div>
    </Fragment>
  );
}
