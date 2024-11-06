import React from "react";
import { makeStyles } from "tss-react/mui";

import arrowIcon from "./../../assets/icon/arrow.png";
import frame5 from "./../../assets/image/frame-5.png";

const useStyles = makeStyles()(() => ({
  container: {
      display: 'flex',
      width: '100%',
      maxWidth: '1440px',
      maxHeight: '564px',
      boxSizing: 'border-box',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 104px',
      gap: '25px',
      fontFamily: 'Montserrat',
      color: 'rgba(245, 245, 245, 1)',

      backgroundColor: 'rgb(0, 0, 0)',
      clipPath: 'polygon(100% 0, 100% 35%, 62% 100%, 0 100%, 0 0)',
  },
  infoBlock: {
      width: '50%',
      maxWidth: '602px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '13px',
  },
  title: {
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '60px',
      margin: '0',
  },
  paragraph: {
    fontSize: '18px',
    fontWeight: '200',
    lineHeight: '28px',
    margin: '0',
  },
  boldParagraph: {
    fontWeight: '700',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    maxWidth: '360px',
    minWidth: '180px',
    padding: '14px 28px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '19.5px',
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(252, 209, 68, 1)',
    fontFamily: 'inherit',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
          backgroundColor: 'rgb(248, 196, 23, 1)',
      },
  },
  icon: {
    marginLeft: 'auto',

  },

  imageBlock: {
      flex: 1,
      textAlign: 'center',
  },
  image: {
      maxWidth: '100%',
      borderRadius: '8px',
  },
}));

const FuturistConference: React.FC = () => {
  const { classes } = useStyles();

  return (
  <div className={classes.container}>
    <div className={classes.infoBlock}>
        <h2 className={classes.title}>The 6th annual Futurist Conference.</h2>
        <p className={classes.paragraph}>
        The Global Entrepreneurship Network released seven targets and 35 recommendations in{' '}
        <span className={classes.boldParagraph}>support of policies and programs that leverage entrepreneurship to boost economic growth and job creation</span>
        {' '}across Latin America, the Caribbean and Latino/a communities throughout the United States.
        </p>
        <button className={classes.button}>
          Download Report
          <img src={arrowIcon} className={classes.icon} alt="Arrow Icon" />
          </button>
    </div>
    <div className={classes.imageBlock}>
        <img src={frame5} className={classes.image} alt="Conference"/>
    </div>
  </div>
  );
}

export default FuturistConference;