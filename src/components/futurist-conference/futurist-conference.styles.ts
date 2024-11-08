import { makeStyles } from "tss-react/mui";

import frame5 from "./../../assets/image/frame-5.png";
import frame5Shadow from "./../../assets/image/frame-5-shadow.png";

const useStyles = makeStyles()(() => ({
  container: {
    maxWidth: '144rem',
    minWidth: '32rem',
    width: '100%',
    // don't know is maxHeight important parameter?
    // finish layout futurist-conference endpoint 480px
    maxHeight: 'clamp(54.4rem, 53.4000rem + 2.0833vw, 56.4rem)',
    // --------------------------------
    padding: '2rem clamp(2rem, -2.2000rem + 8.7500vw, 10.4rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    //clamp does not work with gap
    gap: 'clamp(1.3rem, 0.008vw, 2.5rem)',
    //--------------------------------
    fontFamily: 'Montserrat',
    color: 'rgba(245, 245, 245, 1)',
    backgroundColor: 'rgb(0, 0, 0)',
    backgroundImage: 'linear-gradient(to top left, rgb(255, 255, 255, 1) 50%, transparent 50%)',
    backgroundPosition: 'calc(100% + 0.1rem) calc(100% + 0.1rem)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '35% 65%',
    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1.3rem',
      color: 'rgba(0, 0, 0, 1)',
      backgroundColor: 'rgb(255, 255, 255, 1)',
      backgroundImage: 'none',
    },
  },
  infoBlock: {
    maxWidth: 'clamp(44rem, 35.9000rem + 16.8750vw, 60.2rem)',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //clamp does not work with gap
    gap: 'clamp(1rem, 0.002vw, 1.3rem)',
    //--------------------------------

    '@media (max-width: 480px)': {
      width: '100%',
      alignItems: 'center',
    }
  },
  title: {
    margin: '0',
    fontSize: 'clamp(2.4rem, 1.2000rem + 2.5000vw, 4.8rem)',
    fontWeight: '700',
    lineHeight: 'clamp(3.2rem, 1.8000rem + 2.9167vw, 6rem)',
  },
  paragraph: {
    margin: '0',
    fontSize: 'clamp(1.4rem, 1.2000rem + 0.4167vw, 1.8rem)',
    fontWeight: '200',
    lineHeight: 'clamp(2rem, 1.6000rem + 0.8333vw, 2.8rem)',
    '@media (max-width: 480px)': {
      fontWeight: '400',
    }
  },
  boldParagraph: {
    fontWeight: '700',
  },
  button: {
    position: 'relative',
    maxWidth: 'calc(80rem - clamp(36rem, 32.0000rem + 8.3333vw, 44rem))',
    minWidth: 'clamp(12rem, 9.0000rem + 6.2500vw, 18rem)',
    width: '100%',
    padding: 'clamp(0.8rem, 0.5000rem + 0.6250vw, 1.4rem) clamp(1.6rem, 1.0000rem + 1.2500vw, 2.8rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontSize: 'clamp(1.4rem, 1.3000rem + 0.2083vw, 1.6rem)',
    fontWeight: '700',
    lineHeight: 'clamp(1.7rem, 1.5750rem + 0.2604vw, 1.95rem)',
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(252, 209, 68, 1)',
     '&:hover': {
        backgroundColor: 'rgb(248, 196, 23, 1)',
    },
    border: 'none',
    borderRadius: '1rem',
    cursor: 'pointer',
  },
  icon: {
    position: 'absolute',
    right: 'clamp(5%, 1.6000rem + 0.8333vw, 10%)',

  },

  imageBlock: {
    maxWidth: 'clamp(44rem, 37.0000rem + 14.5833vw, 58rem)',
    maxHeight: 'clamp(22.1rem, 13.5000rem + 17.9167vw, 39.3rem)',
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
      height: '100%',
      content: `url(${frame5})`,
      '@media (max-width: 480px)': {
        content: `url(${frame5Shadow})`,
    }
  },
}));

export default useStyles;