import React from 'react';
import clsx from 'clsx';
import { 
  Avatar, 
  Button, 
  Container
} from '@material-ui/core';

import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LanguageIcon from '@material-ui/icons/Language';

import { FaViber } from 'react-icons/fa';

import avatar from './avatar.jpg';
import logo from './logo.png';
import { useStyles } from './styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Container>
        <header className={classes.header}>
          <Avatar 
            alt="Казнадзей мебель" 
            className={classes.avatar} 
            src={avatar} 
          />
          <img src={logo} className={classes.logo} />
        </header>
        <div>

          <Button
            disableElevation
            size='large'
            variant="contained"
            color="primary"
            className={clsx(classes.button, classes.phone)}
            startIcon={<PhoneIcon />}
            component='a'
            href='tel:+375293319233'
            >
            Позвонить
          </Button>

          <Button
            disableElevation
            size='large'
            variant="contained"
            color="primary"
            className={clsx(classes.button, classes.viber)}
            startIcon={<FaViber />}
            component='a'
            href='viber://chat?number=375293319233'
            >
            Написать в Вайбер
          </Button>

          <Button
            disableElevation
            size='large'
            variant="contained"
            color="primary"
            className={clsx(classes.button, classes.whatsapp)}
            startIcon={<WhatsAppIcon />}
            component='a'
            href='https://api.whatsapp.com/send?phone=375293319233'
            >
            Написать в Вотсап
          </Button>

          <Button
            disableElevation
            size='large'
            variant="contained"
            color="primary"
            className={clsx(classes.button, classes.telegram)}
            startIcon={<TelegramIcon />}
            component='a'
            href='https://t.me/DmitriyChupin'
            >
            Написать в телеграм
          </Button>

          <Button
            disableElevation
            size='large'
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<LanguageIcon />}
            component='a'
            href='http://www.kaznadzei.by/'
            >
            Перейти на сайт
          </Button>
        </div>
        <p className={classes.footer}>@kaznadzei_mebel</p>
      </Container>
    </div>
  );
}

export default App;
