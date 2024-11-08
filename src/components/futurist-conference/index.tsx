import React from "react";

import arrowIcon from "./../../assets/icon/arrow.png";
import useStyles from "./futurist-conference.styles";

const FuturistConference: React.FC = () => {
  const { classes } = useStyles();

  return (
  <div className={classes.container}>
    <div className={classes.infoBlock}>
        <h2 className={classes.title}>The 6th annual Futurist Conference.</h2>
        <p className={classes.paragraph}>
        The Global Entrepreneurship Network released seven targets and 35 recommendations in&nbsp;
        <span className={classes.boldParagraph}>support of policies and programs that leverage entrepreneurship to boost economic growth and job creation</span>
        &nbsp;across Latin America, the Caribbean and Latino/a communities throughout the United States.
        </p>
        <button className={classes.button}>
          Download Report
          <img src={arrowIcon} className={classes.icon} alt="Arrow Icon" />
          </button>
    </div>
    <div className={classes.imageBlock}>
        <img className={classes.image} alt="Conference"/>
    </div>
  </div>
  );
}

export default FuturistConference;