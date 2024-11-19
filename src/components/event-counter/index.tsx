import calendarIcon from '@icon/calendar.svg';
import mapIcon from '@icon/map.svg';
import frame80 from '@image/event-counter-image/frame-80.png';
import React from "react";

import useStyles from "./event-counter.styles";

const EventCounter: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageBlock}>
        <img className={classes.image} src={frame80} alt="conference image" />
      </div>

      <div className={classes.titleBlock}>
        <h2 className={classes.title}>Canada's Largest Crypto, Web3 & Blockchain Event</h2>
      </div>

      <div className={classes.counterBlock}>
        <div className={classes.counterItem}>
          <span className={classes.counterNumber}>15</span>
          <span className={classes.counterText}>Days</span>
        </div>

        <div className={classes.counterItem}>
          <span className={classes.counterNumber}>12</span>
          <span className={classes.counterText}>Hours</span>
        </div>

        <div className={classes.counterItem}>
          <span className={classes.counterNumber}>08</span>
          <span className={classes.counterText}>Mins</span>
        </div>
      </div>

      <div className={classes.infoBlock}>
        <div className={classes.infoItem}>
          <img className={classes.infoIcon} src={calendarIcon} alt="calendar icon" />
          <span className={classes.infoText}>
            AUGUST 13-14,&nbsp;
            <span className={classes.boldText}>2024</span>
          </span>
        </div>

        <div className={classes.infoItem}>
          <img className={classes.infoIcon} src={mapIcon} alt="location icon" />
          <span className={classes.infoText}>
            TORONTO,&nbsp;
            <span className={classes.boldText}>CANADA</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCounter;