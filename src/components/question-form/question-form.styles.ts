import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    minWidth: '32rem',
    width: '100%',
    padding: 'calc(20.4rem - clamp(8.45rem, 6.7000rem + 3.6458vw, 11.95rem)) 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    fontFamily: 'Montserrat',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(245, 245, 245, 1)',
    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      backgroundColor: 'rgb(255, 255, 255, 1)',
      gap: '3rem',
    },

    '@media (max-width: 320px)': {
      padding: '2rem 1.6rem',
    }
  },

  titleBlock: {
    width: 'clamp(44rem, 35.9000rem + 16.8750vw, 60.2rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    '@media (max-width: 480px)': {
      width: 'clamp(28.8rem, -1.6000rem + 95.0000vw, 44rem)',
    },
  },

  title: {
    margin: '0',
    fontSize: 'clamp(2.4rem, 1.8000rem + 1.2500vw, 3.6rem)',
    fontWeight: '700',
    lineHeight: 'clamp(3.2rem, 2.6000rem + 1.2500vw, 4.4rem)',
    letterSpacing: '-0.02em',

    '@media (max-width: 480px)': {
      letterSpacing: '0',
    }
  },

  paragraph: {
    margin: '0',
    fontSize: 'clamp(1.6rem, 1.5000rem + 0.2083vw, 1.8rem)',
    fontWeight: '400',
    lineHeight: 'clamp(2.4rem, 2.2000rem + 0.4167vw, 2.8rem)',
  },

  form: {
    width: 'clamp(44rem, 31.5000rem + 26.0417vw, 69rem)',
    padding: 'clamp(0rem, -1.0000rem + 2.0833vw, 2rem) clamp(0rem, -2.2000rem + 4.5833vw, 4.4rem)',
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
    backgroundColor: 'rgb(255, 255, 255, 1)',
    borderRadius: '1rem',
    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      width: 'clamp(28.8rem, -1.6000rem + 95.0000vw, 44rem)',
    },
  },

  formFieldsBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },

  fieldRow: {
    position: 'relative',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },

  label: {
    fontSize: 'clamp(1.2rem, 1.0000rem + 0.4167vw, 1.6rem)',
    lineHeight: 'clamp(1.8rem, 1.5000rem + 0.6250vw, 2.4rem)',
    fontWeight: '700',
    color: 'rgba(52, 64, 84, 1)',

    '@media (max-width: 480px)': {
      fontWeight: '600',
    }
  },

  input: {
    width: '100%',
    padding: '1rem 1.4rem',
    fontFamily: 'Montserrat',
    fontSize: 'clamp(1.2rem, 1.0000rem + 0.4167vw, 1.6rem)',
    lineHeight: 'clamp(1.8rem, 1.5000rem + 0.6250vw, 2.4rem)',
    fontWeight: 400,
    color: 'rgba(102, 112, 133, 1)',
    backgroundColor: 'rgb(255, 255, 255, 1)',
    border: '0.1rem solid rgba(208, 213, 221, 1)',
    borderRadius: '0.8rem',
    transition: 'border-color 0.2s',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: 'rgba(52, 64, 84, 1)',
      backgroundColor: 'rgb(250, 250, 250, 1)',
      outline: 'none',
    },
  },

  textarea: {
    width: '100%',
    minHeight: '10rem',
    maxHeight: '20rem',
    padding: '1rem 1.4rem',
    fontFamily: 'Montserrat',
    fontSize: 'clamp(1.2rem, 1.0000rem + 0.4167vw, 1.6rem)',
    lineHeight: 'clamp(1.8rem, 1.5000rem + 0.6250vw, 2.4rem)',
    fontWeight: 400,
    color: 'rgba(102, 112, 133, 1)',
    backgroundColor: 'rgb(255, 255, 255, 1)',
    border: '0.1rem solid rgba(208, 213, 221, 1)',
    borderRadius: '0.8rem',
    transition: 'border-color 0.2s',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    boxSizing: 'border-box',
    resize: 'vertical',
    overflowX: 'hidden',
    '&:focus': {
      borderColor: 'rgba(52, 64, 84, 1)',
      backgroundColor: 'rgb(250, 250, 250, 1)',
      outline: 'none',
    },
  },

  error: {
    position: 'absolute',
    top: '100%',
    fontSize: '1.4rem',
    lineHeight: '2rem',
    fontWeight: 400,
    color: 'rgba(71, 84, 103, 1)',
  },

  actionsBlock: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    width: 'clamp(28.8rem, 25.2000rem + 7.5000vw, 36rem)',
    maxHeight: '5.6rem',
    minHeight: '4rem',
    height: 'clamp(4rem, 3.2000rem + 1.6667vw, 5.6rem)',
    padding: 'clamp(0.6rem, 0.2000rem + 0.8333vw, 1.4rem) clamp(1.2rem, 0.4000rem + 1.6667vw, 2.8rem)',
    fontFamily: 'Montserrat',
    fontSize: 'clamp(1.4rem, 1.3000rem + 0.2083vw, 1.6rem)',
    lineHeight: 'clamp(1.7rem, 1.5750rem + 0.2604vw, 1.95rem)',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(252, 209, 68, 1)',
    border: 'none',
    borderRadius: '1rem',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'transform 0.2s',

    '&:hover': {
      backgroundColor: 'rgb(248, 196, 23, 1)',
      transform: 'scale(1.02)',
    },
  },

  disabledButton: {
    backgroundColor: 'rgb(211, 211, 211)',
    color: 'rgb(128, 128, 128)',
    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: 'rgb(211, 211, 211)',
      transform: 'none',
    },
  },

}));

export default useStyles;