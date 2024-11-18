import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
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
      gap: '2rem',
    },
  },

  item: {
    width: 'clamp(10.8rem, 6.7000rem + 8.5417vw, 19rem)',
    height: 'clamp(5.6rem, 3.4000rem + 4.5833vw, 10rem)',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',

    '@media (max-width: 480px)': {
      '&:nth-of-type(n + 7)': {
        display: 'none',
      },
    },
  },

  link: {
    "&:hover img": {
      transform: "translate(-2px, -2px)",
    },
    textDecoration: 'none',
  },

  'logo-bbc-1': {
    width: 'clamp(7.2rem, 5.5500rem + 3.4375vw, 10.5rem)',
  },

  'logo-business-insider-2': {
    width: 'clamp(6.5rem, 5.0000rem + 3.1250vw, 9.5rem)',
  },

  'logo-washington-post-3': {
    width: 'clamp(10.8rem, 8.3000rem + 5.2083vw, 15.8rem)',
  },

  'logo-associated-press-4': {
    width: 'clamp(2.7rem, 2.0500rem + 1.3542vw, 4rem)',
  },

  'logo-forbes-5': {
    width: 'clamp(8.1rem, 6.2500rem + 3.8542vw, 11.8rem)',
  },

  'logo-fox-6': {
    width: 'clamp(4.8rem, 3.7000rem + 2.2917vw, 7rem)',
  },

  'logo-cgtn-7': {
    width: 'clamp(8.1rem, 6.2500rem + 3.8542vw, 11.8rem)',
  },

}));

export default useStyles;