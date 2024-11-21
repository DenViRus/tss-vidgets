import calendarIcon from '@icon/calendar.svg';
import mapIcon from '@icon/map.svg';
import frame80 from '@image/event-counter-image/frame-80.png';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React, { useEffect, useMemo,useRef, useState } from "react";

import useStyles from "./EventCountdown.styles";

dayjs.extend(duration);

const eventStartDate = dayjs('2024-11-28T17:00:00');
const eventDurationDays = 5;
const eventEndDate = eventStartDate.add(eventDurationDays - 1, 'day');

const EventCountdown: React.FC = () => {
  const { classes } = useStyles();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
  });

  const countdownInterval = useRef<NodeJS.Timeout | undefined>(undefined);

  const updateCountdown = () => {
    const now = dayjs();
    const difference = eventStartDate.diff(now);

    if (difference <= 0) {
      console.log({ days: '00', hours: '00', minutes: '00' });
      console.log('Event start!');
      setTimeLeft({ days: '00', hours: '00', minutes: '00' });

      clearInterval(countdownInterval.current!);
      return;
    }

    const durationLeft = dayjs.duration(difference);

    const days = Math.floor(durationLeft.asDays()).toString();
    const hours = durationLeft.hours().toString();
    const minutes = durationLeft.minutes().toString();

    setTimeLeft({
      days: days.padStart(2, '0'),
      hours: hours.padStart(2, '0'),
      minutes: minutes.padStart(2, '0'),
    });
  };

  useEffect(() => {
    updateCountdown();

    if (eventStartDate.diff(dayjs()) > 0) {
      countdownInterval.current = setInterval(() => {
        updateCountdown();
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval.current!);
    };
  }, []);

  const eventDateDisplay = useMemo(() => {
    const eventStartMonth = eventStartDate.format('MMMM').toUpperCase();
    const eventStartDay = eventStartDate.format('DD');
    const eventEndDay = eventEndDate.format('DD');
    const eventYear = eventStartDate.format('YYYY');

    let display = '';

    if (eventDurationDays > 1) {
      if (eventStartDate.month() === eventEndDate.month()) {

        display = `${eventStartMonth} ${eventStartDay} - ${eventEndDay}`;
      } else {

        const eventStartMonthAbbrev = eventStartDate.format('MMM').toUpperCase();
        const eventEndMonthAbbrev = eventEndDate.format('MMM').toUpperCase();
        display = `${eventStartMonthAbbrev} ${eventStartDay} - ${eventEndMonthAbbrev} ${eventEndDay}`;
      }
    } else {

      display = `${eventStartMonth} ${eventStartDay}`;
    }

    display += `, `;

    return (
      <>
        {display}
        <span className={classes.boldText}>{eventYear}</span>
      </>
    );
  }, [classes.boldText]);

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
          <span className={classes.counterNumber}>{timeLeft.days}</span>
          <span className={classes.counterText}>Days</span>
        </div>

        <div className={classes.counterItem}>
          <span className={classes.counterNumber}>{timeLeft.hours}</span>
          <span className={classes.counterText}>Hours</span>
        </div>

        <div className={classes.counterItem}>
          <span className={classes.counterNumber}>{timeLeft.minutes}</span>
          <span className={classes.counterText}>Mins</span>
        </div>
      </div>

      <div className={classes.infoBlock}>
        <div className={classes.infoItem}>
          <img className={classes.infoIcon} src={calendarIcon} alt="" aria-hidden="true" />
          <span className={classes.infoText}>
            {eventDateDisplay}
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
}

export default EventCountdown;