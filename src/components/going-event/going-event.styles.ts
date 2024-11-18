import { makeStyles } from "tss-react/mui";

import frame5 from "./../../assets/image/going-event-image/frame-5.png";
import frame5320 from "./../../assets/image/going-event-image/frame-5-320.png";
import frame5480 from "./../../assets/image/going-event-image/frame-5-480.png";

const useStyles = makeStyles()(() => ({
  container: {
    width: '100%',
    padding: 'clamp(2rem, -1.2000rem + 6.6667vw, 8.4rem) clamp(2rem, -2.2000rem + 8.7500vw, 10.4rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.5rem',
    fontFamily: 'Montserrat',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgb(255, 255, 255, 1)',
    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      flexDirection: 'column-reverse',
      gap: '1.3rem',
    },

    '@media (max-width: 320px)': {
      padding: '2rem 1.6rem',
    }
  },

  imageBlock: {
    width: 'clamp(44rem, 35.6500rem + 17.3958vw, 60.7rem)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    '@media (max-width: 480px)': {
      width: 'clamp(28.8rem, -1.6000rem + 95.0000vw, 44rem)',
    }

  },

  image: {
    width: '100%',
    content: `url(${frame5})`,
   '@media (max-width: 480px)': {
        content: `url(${frame5480})`,
      },
      '@media (max-width: 320px)': {
        content: `url(${frame5320})`,
      },
  },

  infoBlock: {
    width: 'clamp(44rem, 36.3000rem + 16.0417vw, 59.4rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '1.3rem',

    '@media (max-width: 480px)': {
      width: 'clamp(28.8rem, -1.6000rem + 95.0000vw, 44rem)',
      alignItems: 'center',
      gap: '1rem',
    },

  },

  title: {
    width: '100%',
    margin: '0',
    padding: '1rem 0',
    fontSize: 'clamp(2rem, 0.6000rem + 2.9167vw, 4.8rem)',
    fontWeight: '700',
    lineHeight: 'clamp(3rem, 1.5000rem + 3.1250vw, 6rem)',
    letterSpacing: '-0.02em',

    '@media (max-width: 480px)': {
      letterSpacing: '0',
    },

  },

  paragraph: {
    margin: '0',
    fontSize: 'clamp(1.4rem, 1.2000rem + 0.4167vw, 1.8rem)',
    fontWeight: '400',
    lineHeight: 'clamp(2rem, 1.6000rem + 0.8333vw, 2.8rem)',
    '&:nth-of-type(n + 2)': {
    marginTop: '1rem',
  },
    '@media (max-width: 480px)': {
      fontWeight: '400',
    },
  },

  boldParagraph: {
    fontWeight: '700',
  },

  firstParagraph: {
   '@media (max-width: 480px)': {
      display: 'none',
    },
  },

}));

export default useStyles;