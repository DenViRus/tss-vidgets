import React from "react";

import useStyles from "../going-event/going-event.styles";

const GoingEvent: React.FC = () => {
  const { classes } = useStyles();

  return (
  <div className={classes.container}>
    <div className={classes.imageBlock}>
        <img className={classes.image} alt="Event"/>
    </div>
    <div className={classes.infoBlock}>
        <h2 className={classes.title}>Why are we going to the event</h2>
        <p className={classes.paragraph}>
        The Global Entrepreneurship Network released seven targets and 35 recommendations in&nbsp;
        <span className={classes.boldParagraph}>
          support of policies and programs that leverage entrepreneurship to boost economic growth and job creation
        </span>
        &nbsp;across Latin America, the Caribbean and Latino/a communities throughout the United States.
        </p>
        <p className={classes.paragraph}>
        The Global Entrepreneurship Network released seven targets and 35 recommendations in&nbsp;
        <span className={classes.boldParagraph}>
          support of policies and programs that leverage entrepreneurship to boost economic growth and job creation
        </span>
        &nbsp;across Latin America, the Caribbean and Latino/a communities throughout the United States.
        </p>
    </div>
  </div>
  );
}

export default GoingEvent;