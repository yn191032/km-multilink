import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  app: {

  },
  header: {
    textAlign: 'center',
    margin: '40px 0'
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: '0 auto',
  },
  button: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  telegram: { backgroundColor: '#61a8de' },
  viber: { backgroundColor: '#7d3daf' },
  whatsapp: { backgroundColor: '#15b969' },
  phone: { backgroundColor: '#ce4363' },

  logo: {
    width: 200,
    marginTop: 10,
  },
  footer: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
  },
}));