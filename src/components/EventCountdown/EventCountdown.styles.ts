import eventCounterBackground from '@image/event-counter-image/event-counter-background.png';
import { keyframes } from "tss-react";
import { makeStyles  } from "tss-react/mui";

const blinkingAnimation = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const useStyles = makeStyles()(() => ({
  section: {
    width: '100%',
    padding: 'calc(7.5rem - clamp(2rem, 0.2500rem + 3.6458vw, 5.5rem)) calc(3.6rem - clamp(1.6rem, 1.4000rem + 0.4167vw, 2rem))',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
    fontFamily: 'Montserrat',
    color: 'rgba(255, 255, 255, 1)',
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 35.24%, #000 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${eventCounterBackground}) rgb(211, 211, 211, 1); -41.296px -305.607px / 103.715% 197.721% no-repeat`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      gap: '4.5rem',
    },
  },

  image: {
    width: 'calc(43.3rem - clamp(20.4rem, 19.1500rem + 2.6042vw, 22.9rem))',
    height: 'calc(12.1rem - clamp(5.7rem, 5.3500rem + 0.7292vw, 6.4rem))',
  },

  title: {
    width: 'clamp(33.4rem, 19.9000rem + 28.1250vw, 60.4rem)',
    margin: '0',
    fontSize: 'clamp(3rem, 1.5000rem + 3.1250vw, 6rem)',
    fontWeight: '700',
    lineHeight: 'clamp(3.6rem, 1.8000rem + 3.7500vw, 7.2rem)',
    letterSpacing: '-0.02em',
    textAlign: 'center',

    '@media (max-width: 480px)': {
      width: 'clamp(28.8rem, 19.6000rem + 28.7500vw, 33.4rem)',
    },

  },

  counterBlock: {
    position: 'relative',
    width: 'clamp(33.4rem, 19.9000rem + 28.1250vw, 60.4rem)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media (max-width: 480px)': {
      width: 'clamp(28.8rem, 19.6000rem + 28.7500vw, 33.4rem)',
    },
  },

  counterItem: {
    width: 'clamp(9.1rem, 5.8500rem + 6.7708vw, 15.6rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',

  },

  counterNumber: {
    fontSize: 'clamp(3.6rem, 1.8000rem + 3.7500vw, 7.2rem)',
    fontWeight: '700',
    lineHeight: 'clamp(4.4rem, 1.1000rem + 6.8750vw, 11rem)',
    letterSpacing: '-0.02em',
    textAlign: 'center',
  },

  counterText: {
    fontSize: 'clamp(2.4rem, 1.2000rem + 2.5000vw, 4.8rem)',
    fontWeight: '700',
    lineHeight: 'clamp(3.2rem, 1.8000rem + 2.9167vw, 6rem)',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    color: 'rgba(252, 209, 68, 1)',

  },

  infoBlock: {
    padding: 'clamp(0rem, -0.9000rem + 1.8750vw, 1.8rem) clamp(0rem, -0.5000rem + 1.0417vw, 1rem)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      flexDirection: 'column',
      gap: '1.5rem',
    },
  },

  infoItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  },

  infoIcon: {
    width: '1.5rem'
  },

  infoText: {
    fontSize: 'clamp(1.2rem, 0.9000rem + 0.6250vw, 1.8rem)',
    fontWeight: '200',
    lineHeight: 'clamp(1.8rem, 1.3000rem + 1.0417vw, 2.8rem)',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  boldText: {
    fontWeight: '700',
  },

  statusText: {
    width: '100%',
    fontSize: 'clamp(2rem, 1.2500rem + 1.5625vw, 3.5rem)',
    fontWeight: '700',
    lineHeight: 'clamp(2.2rem, 1.4500rem + 1.5625vw, 3.7rem)',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'rgba(252, 209, 68, 1)',
  },

  blinking: {
    position: 'absolute',
    top: '-1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: `${blinkingAnimation} 1s infinite`,

    '@media (max-width: 480px)': {
      top: '-2rem',
      fontSize: 'clamp(1.8rem, 1.1000rem + 1.2500vw, 2.8rem)',
      lineHeight: 'clamp(2rem, 1.2500rem + 1.2500vw, 3.5rem)',
    },
  },

}));

export default useStyles;