import { makeStyles } from "tss-react/mui";

import frame5 from "./../../assets/image//going-event-image/frame-5.png";

const useStyles = makeStyles()(() => ({
  container: {
    maxWidth: '144rem',
    minWidth: '32rem',
    width: '100%',
    padding: '2rem clamp(2rem, -2.2000rem + 8.7500vw, 10.4rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2.5rem',
    fontFamily: 'Montserrat',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgb(255, 255, 255, 1)',
    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      gap: '1.3rem',
    },

    '@media (max-width: 320px)': {
      padding: '2rem 1.6rem',
    }
  },

  imageBlock: {
    maxWidth: 'clamp(44rem, -237.5000rem + 586.4583vw, 60.7rem)',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 480px)': {
      width: '100%',
    }

  },

  image: {
    width: '100%',
    content: `url(${frame5})`,

  },

  infoBlock: {
    maxWidth: 'clamp(44rem, 36.3000rem + 16.0417vw, 59.4rem)',
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '1.3rem',

    '@media (max-width: 480px)': {
      width: '100%',
      alignItems: 'center',
      gap: '1rem',
    },

  },

  title: {
    margin: '0',
    fontSize: 'clamp(2rem, 0.6000rem + 2.9167vw, 4.8rem)',
    fontWeight: '700',
    lineHeight: 'clamp(3rem, 1.5000rem + 3.1250vw, 6rem)',

  },

  paragraph: {

  },

}));

export default useStyles;