import calendarIcon from '@icon/calendar.svg';
import mapIcon from '@icon/map.svg';
import frame80 from '@image/event-counter-image/frame-80.png';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React, { useEffect, useState } from "react";

import useStyles from "./EventCounter.styles";

dayjs.extend(duration);

const eventStartDate = dayjs('2024-11-28T17:00:00');
const eventDurationDays = 2;
const eventEndDate = eventStartDate.add(eventDurationDays - 1, 'day');

const EventCounter: React.FC = () => {
  const { classes } = useStyles();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    const updateTimer = () => {
      const now = dayjs();
      const difference = eventStartDate.diff(now);

      if (difference <= 0) {
        console.log({ days: '00', hours: '00', minutes: '00' });
        console.log('Event start!');
        setTimeLeft({ days: '00', hours: '00', minutes: '00' });

        if (interval !== undefined) {
          clearInterval(interval);
          interval = undefined;
        }

        return;
      }

      const durationLeft = dayjs.duration(difference);

      const days = Math.floor(durationLeft.asDays());
      const hours = durationLeft.hours();
      const minutes = durationLeft.minutes();

      setTimeLeft({
        days: days < 10 ? `0${days}` : `${days}`,
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      });
    };

    updateTimer();

    if (eventStartDate.diff(dayjs()) > 0) {
      interval = setInterval(updateTimer, 1000);
    }

    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
        interval = undefined;
      }
    };
  }, []);

  const eventStartMonth = eventStartDate.format('MMMM').toUpperCase();
  const eventStartDay = eventStartDate.format('DD');
  const eventEndDay = eventEndDate.format('DD');
  const eventYear = eventStartDate.format('YYYY');

  let eventDateDisplay = '';

  if (eventDurationDays > 1) {
    if (eventStartDate.month() === eventEndDate.month()) {
      eventDateDisplay = `${eventStartMonth} ${eventStartDay} - ${eventEndDay}`;
    } else {
      const eventStartMonthAbbrev = eventStartDate.format('MMM').toUpperCase();
      const eventEndMonthAbbrev = eventEndDate.format('MMM').toUpperCase();
      eventDateDisplay = `${eventStartMonthAbbrev} ${eventStartDay} - ${eventEndMonthAbbrev} ${eventEndDay}`;
    }
  } else {
    eventDateDisplay = `${eventStartMonth} ${eventStartDay}`;
  }

  eventDateDisplay += `, `;

  return (
    <div className={classes.container}>
      <div className={classes.imageBlock}>
        <img className={classes.image} src={frame80} alt="conference image" />
      </div>

      <div className={classes.titleBlock}>
        <h2 className={classes.title}>Canada's Largest Crypto, Web3 & Blockchain Event</h2>
      </div>

      <div className={classes.counterBlock}>
        <div className={classes.counterItem} aria-label={`${timeLeft.days} Days`}>
          <span className={classes.counterNumber}>{timeLeft.days}</span>
          <span className={classes.counterText}>Days</span>
        </div>

        <div className={classes.counterItem} aria-label={`${timeLeft.hours} Hours`}>
          <span className={classes.counterNumber}>{timeLeft.hours}</span>
          <span className={classes.counterText}>Hours</span>
        </div>

        <div className={classes.counterItem} aria-label={`${timeLeft.minutes} Minutes`}>
          <span className={classes.counterNumber}>{timeLeft.minutes}</span>
          <span className={classes.counterText}>Mins</span>
        </div>
      </div>

      <div className={classes.infoBlock}>
        <div className={classes.infoItem}>
          <img className={classes.infoIcon} src={calendarIcon} alt="" aria-hidden="true" />
          <span className={classes.infoText}>
            {eventDateDisplay}
            <span className={classes.boldText}>{eventYear}</span>
          </span>
        </div>

        <div className={classes.infoItem}>
          <img className={classes.infoIcon} src={mapIcon} alt="" aria-hidden="true" />
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