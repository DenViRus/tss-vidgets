import downloadIcon from "@icon/download.svg";
import frame5 from "@image/futurist-conference-image/frame-5.png";
import frame5320 from "@image/futurist-conference-image/frame-5-320.png";
import frame5480 from "@image/futurist-conference-image/frame-5-480.png";
import React from "react";

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
          <img src={downloadIcon} className={classes.icon} alt="Download Icon" />
          </button>
    </div>
    <div className={classes.imageBlock}>
      <picture className={classes.picture}>
        <source media="(max-width: 320px)" srcSet={frame5320} />
        <source media="(max-width: 480px)" srcSet={frame5480} />
        <img className={classes.image} src={frame5} alt="Conference image" />
      </picture>
    </div>
  </div>
  );
}

export default FuturistConference;