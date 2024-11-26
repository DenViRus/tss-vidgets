import calendarIcon from '@icon/calendar.svg';
import mapIcon from '@icon/map.svg';
import frame80 from '@image/event-counter-image/frame-80.png';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React, { useCallback,useEffect, useMemo, useRef, useState } from "react";

import useStyles from "./EventCountdown.styles";

dayjs.extend(duration);

const eventStartDate = dayjs('2024-11-26T12:58:00');
const eventEndDate = dayjs('2024-11-26T13:05:00');

const EventCountdown: React.FC = () => {
  const { classes } = useStyles();

  const [eventStatus, setEventStatus] = useState<'before' | 'ongoing' | 'ended'>('before');
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
  });

  const countdownInterval = useRef<NodeJS.Timeout | null>(null);

  const clearCountdownInterval = useCallback(() => {
    if (countdownInterval.current !== null) {
      clearInterval(countdownInterval.current);
      countdownInterval.current = null;
    }
  }, []);

  const updateCountdown = useCallback(() => {
    const now = dayjs();

    if (now.isAfter(eventEndDate)) {
      setEventStatus('ended');
      setTimeLeft({ days: '00', hours: '00', minutes: '00' });
      clearCountdownInterval();
      console.log('The event has ended.');
      return;
    }

    if (now.isAfter(eventStartDate)) {
      setEventStatus('ongoing');
      const difference = eventEndDate.diff(now);
      const durationLeft = dayjs.duration(difference);

      const days = Math.floor(durationLeft.asDays()).toString();
      const hours = durationLeft.hours().toString();
      const minutes = durationLeft.minutes().toString();

      setTimeLeft({
        days: days.padStart(2, '0'),
        hours: hours.padStart(2, '0'),
        minutes: minutes.padStart(2, '0'),
      });
      return;
    }

    const difference = eventStartDate.diff(now);
    if (difference <= 0) return;

    const durationLeft = dayjs.duration(difference);
    const days = Math.floor(durationLeft.asDays()).toString();
    const hours = durationLeft.hours().toString();
    const minutes = durationLeft.minutes().toString();

    setTimeLeft({
      days: days.padStart(2, '0'),
      hours: hours.padStart(2, '0'),
      minutes: minutes.padStart(2, '0'),
    });
  }, [clearCountdownInterval]);

  useEffect(() => {
    updateCountdown();
    countdownInterval.current = setInterval(() => updateCountdown(), 1000);

    return () => {
      clearCountdownInterval();
    };
  }, [updateCountdown, clearCountdownInterval]);

  const eventDateDisplay = useMemo(() => {
    const eventStartMonth = eventStartDate.format('MMMM').toUpperCase();
  const eventStartDay = eventStartDate.format('DD');
  const eventEndDay = eventEndDate.format('DD');
  const eventStartMonthAbbrev = eventStartDate.format('MMM').toUpperCase();
  const eventEndMonthAbbrev = eventEndDate.format('MMM').toUpperCase();
  const eventYear = eventStartDate.format('YYYY');

  let display = '';

  if (eventStartDate.isSame(eventEndDate, 'day')) {
    display = `${eventStartMonth} ${eventStartDay}`;
  }
  else if (eventStartDate.month() === eventEndDate.month()) {
    display = `${eventStartMonth} ${eventStartDay} - ${eventEndDay}`;
  }
  else {
    display = `${eventStartMonthAbbrev} ${eventStartDay} - ${eventEndMonthAbbrev} ${eventEndDay}`;
  }
  display += `, `;
  return { display, eventYear };
}, []);

  return (
    <section className={classes.section}>
        <img className={classes.image} src={frame80} alt="conference image" />

        <h2 className={classes.title}>Canada's Largest Crypto, Web3 & Blockchain Event</h2>

        <div className={classes.counterBlock}>
        {eventStatus === 'ongoing' && (
          <span className={`${classes.statusText} ${classes.blinking}`}>
            The event is ongoing
          </span>
        )}
        {eventStatus === 'ended' && (
          <span className={classes.statusText}>The event has ended</span>
        )}
        {eventStatus !== 'ended' && (
          <>
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
          </>
        )}
      </div>

      <div className={classes.infoBlock}>
        <div className={classes.infoItem}>
          <img className={classes.infoIcon} src={calendarIcon} alt="" aria-hidden="true" />
          <span className={classes.infoText}>
            {eventDateDisplay.display}
            <span className={classes.boldText}>{eventDateDisplay.eventYear}</span>
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
    </section>
  );
}

export default EventCountdown;