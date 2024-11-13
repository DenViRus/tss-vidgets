import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    maxWidth: '144rem',
    minWidth: '32rem',
    width: '100%',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '1rem',
    boxShadow: '0 0.4rem 1.2rem rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },

  titleBlock: {
    marginBottom: '1.5rem',
    textAlign: 'center',
  },

  title: {
    fontSize: '2.4rem',
    fontWeight: 700,
    lineHeight: '3rem',
    color: '#333',
    marginBottom: '0.5rem',
  },

  paragraph: {
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '2.4rem',
    color: '#555',
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  formFieldsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  fieldRow: {
    display: 'flex',
    flexDirection: 'column',
  },

  label: {
    fontSize: '1.4rem',
    fontWeight: 500,
    color: '#666',
    marginBottom: '0.5rem',
  },

  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.6rem',
    color: '#333',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    transition: 'border-color 0.2s',
    '&:focus': {
      borderColor: '#333',
      outline: 'none',
    },
  },

  textarea: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.6rem',
    color: '#333',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    resize: 'vertical',
    transition: 'border-color 0.2s',
    '&:focus': {
      borderColor: '#333',
      outline: 'none',
    },
  },

  error: {
    fontSize: '1.2rem',
    color: '#d9534f',
    marginTop: '0.5rem',
  },

  actionsBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },

  button: {
    padding: '1rem 2rem',
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
    '&:active': {
      backgroundColor: '#00408b',
    },
  }

}));

export default useStyles;