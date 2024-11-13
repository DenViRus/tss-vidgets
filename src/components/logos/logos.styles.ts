import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    maxWidth: '144rem',
    minWidth: '32rem',
    width: '100%',
    padding: '2rem calc(2rem - clamp(0rem, -1.0000rem + 2.0833vw, 2rem))',
    backgroundColor: 'rgba(252, 209, 68, 1)',
    boxSizing: 'border-box',
  },

  list: {
    width: '100%',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    listStyle: 'none',
    '@media (max-width: 480px)': {
      justifyContent: 'space-between',
      gap: '2rem',
    },
  },

  item: {
    maxWidth: '19rem',
    width: 'clamp(10.8rem, 6.7000rem + 8.5417vw, 19rem)',
    minWidth: '10.8rem',
    padding: '1rem 0',
    textAlign: 'center',

    '@media (max-width: 480px)': {
      '&:nth-of-type(n + 7)': {
        display: 'none',
      },
    },
  },

  link: {
    "&:hover img": {
      transform: "translate(-3px, -3px)",
    },
    textDecoration: 'none',
  },

  'logo-bbc-1': {
    maxWidth: '10.5rem',
    width: 'clamp(7.2rem, 5.5500rem + 3.4375vw, 10.5rem)',
    minWidth: '7.2rem',
  },

  'logo-business-insider-2': {
    maxWidth: '9.5rem',
    width: 'clamp(6.5rem, 5.0000rem + 3.1250vw, 9.5rem)',
    minWidth: '6.5rem',
  },

  'logo-washington-post-3': {
    maxWidth: '15.8rem',
    width: 'clamp(10.8rem, 8.3000rem + 5.2083vw, 15.8rem)',
    minWidth: '10.8rem',
  },

  'logo-associated-press-4': {
    maxWidth: '4rem',
    width: 'clamp(2.7rem, 2.0500rem + 1.3542vw, 4rem)',
    minWidth: '2.7rem',
  },

  'logo-forbes-5': {
    maxWidth: '11.8rem',
    width: 'clamp(8.1rem, 6.2500rem + 3.8542vw, 11.8rem)',
    minWidth: '8.1rem',
  },

  'logo-fox-6': {
    maxWidth: '7rem',
    width: 'clamp(4.8rem, 3.7000rem + 2.2917vw, 7rem)',
    minWidth: '4.8rem',
  },

  'logo-cgtn-7': {
    maxWidth: '11.8rem',
    width: 'clamp(8.1rem, 6.2500rem + 3.8542vw, 11.8rem)',
    minWidth: '8.1rem',
  },

}));

export default useStyles;